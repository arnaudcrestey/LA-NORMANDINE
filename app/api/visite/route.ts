import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type VisitPayload = {
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  phone?: unknown;
  projectType?: unknown;
  timeline?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
};

const attempts = new Map<string, number[]>();

const MAX_ATTEMPTS = 3;
const WINDOW_MS = 60 * 60 * 1000;

function text(value: unknown, maxLength: number) {
  return typeof value === "string"
    ? value.trim().slice(0, maxLength)
    : "";
}

function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] || character,
  );
}

function isRateLimited(key: string) {
  const now = Date.now();

  const recentAttempts = (attempts.get(key) || []).filter(
    (time) => now - time < WINDOW_MS,
  );

  if (recentAttempts.length >= MAX_ATTEMPTS) {
    return true;
  }

  recentAttempts.push(now);
  attempts.set(key, recentAttempts);

  return false;
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      {
        success: false,
        message: "Format de demande non accepté.",
      },
      { status: 415 },
    );
  }

  let payload: VisitPayload;

  try {
    payload = (await request.json()) as VisitPayload;
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Le contenu de la demande est invalide.",
      },
      { status: 400 },
    );
  }

  if (text(payload.website, 200)) {
    return NextResponse.json(
      {
        success: false,
        message: "Votre demande a été refusée par la protection anti-spam.",
      },
      { status: 400 },
    );
  }

  const firstName = text(payload.firstName, 80);
  const lastName = text(payload.lastName, 80);
  const email = text(payload.email, 160).toLowerCase();
  const phone = text(payload.phone, 30);
  const projectType = text(payload.projectType, 100);
  const timeline = text(payload.timeline, 100);
  const message = text(payload.message, 2000);
  const consent = payload.consent === "yes";

  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (
    firstName.length < 2 ||
    lastName.length < 2 ||
    !emailIsValid ||
    !projectType ||
    !timeline ||
    message.length < 20 ||
    !consent
  ) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Veuillez vérifier les champs obligatoires et votre consentement.",
      },
      { status: 400 },
    );
  }

  const forwardedFor = request.headers
    .get("x-forwarded-for")
    ?.split(",")[0]
    ?.trim();

  const rateKey = forwardedFor || email;

  if (isRateLimited(rateKey)) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Trop de demandes ont été effectuées. Merci de réessayer dans une heure.",
      },
      { status: 429 },
    );
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const recipient = process.env.VISIT_RECIPIENT_EMAIL;

  if (
    !smtpHost ||
    !smtpUser ||
    !smtpPassword ||
    !recipient ||
    Number.isNaN(smtpPort)
  ) {
    console.error("Configuration SMTP Hostinger incomplète.");

    return NextResponse.json(
      {
        success: false,
        message:
          "Le service d’envoi n’est pas encore activé. Votre demande n’a pas été transmise.",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
  });

  const safeFirstName = escapeHtml(firstName);
  const safeLastName = escapeHtml(lastName);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone || "Non renseigné");
  const safeProjectType = escapeHtml(projectType);
  const safeTimeline = escapeHtml(timeline);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

  try {
    /*
     * 1. Message reçu par les propriétaires
     */

    await transporter.sendMail({
      from: `"La Normandine" <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `Demande de visite — ${firstName} ${lastName}`,
      text: [
        "Nouvelle demande de visite — La Normandine",
        "",
        `Prénom : ${firstName}`,
        `Nom : ${lastName}`,
        `E-mail : ${email}`,
        `Téléphone : ${phone || "Non renseigné"}`,
        `Nature du projet : ${projectType}`,
        `Délai envisagé : ${timeline}`,
        "",
        "Message :",
        message,
        "",
        "Consentement au traitement de cette demande : oui.",
      ].join("\n"),
      html: `
        <!doctype html>
        <html lang="fr">
          <body style="margin:0; padding:0; background:#f4f0e8;">
            <div style="padding:32px 16px;">
              <div style="
                max-width:680px;
                margin:0 auto;
                padding:40px;
                background:#fffdf8;
                border:1px solid #d8cdbd;
                font-family:Arial, sans-serif;
                color:#20231f;
                line-height:1.65;
              ">
                <p style="
                  margin:0 0 24px;
                  color:#715844;
                  font-size:11px;
                  font-weight:700;
                  letter-spacing:2px;
                  text-transform:uppercase;
                ">
                  La Normandine
                </p>

                <h1 style="
                  margin:0 0 24px;
                  color:#24372d;
                  font-family:Georgia, serif;
                  font-size:38px;
                  font-weight:400;
                  line-height:1.1;
                ">
                  Nouvelle demande de visite
                </h1>

                <p>
                  Une nouvelle demande a été envoyée depuis le site de
                  <strong>La Normandine</strong>.
                </p>

                <hr style="
                  margin:28px 0;
                  border:0;
                  border-top:1px solid #d8cdbd;
                " />

                <p><strong>Prénom :</strong> ${safeFirstName}</p>
                <p><strong>Nom :</strong> ${safeLastName}</p>
                <p><strong>E-mail :</strong> ${safeEmail}</p>
                <p><strong>Téléphone :</strong> ${safePhone}</p>
                <p><strong>Nature du projet :</strong> ${safeProjectType}</p>
                <p><strong>Délai envisagé :</strong> ${safeTimeline}</p>

                <h2 style="
                  margin:32px 0 12px;
                  color:#24372d;
                  font-family:Georgia, serif;
                  font-size:26px;
                  font-weight:400;
                ">
                  Message
                </h2>

                <p>${safeMessage}</p>

                <hr style="
                  margin:28px 0;
                  border:0;
                  border-top:1px solid #d8cdbd;
                " />

                <p style="margin:0; color:#715844; font-size:12px;">
                  Consentement au traitement de cette demande : oui.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    /*
     * 2. Accusé de réception envoyé au visiteur
     *
     * La demande reste validée même si cet e-mail secondaire
     * rencontre exceptionnellement une erreur.
     */

    try {
      await transporter.sendMail({
        from: `"La Normandine" <${smtpUser}>`,
        to: email,
        replyTo: recipient,
        subject: "Votre demande de visite — La Normandine",
        text: [
  `Bonjour ${firstName},`,
  "",
  "Nous vous remercions pour votre intérêt pour La Normandine.",
  "",
  "Votre demande de visite a bien été reçue.",
  "Nous allons en prendre connaissance et reviendrons vers vous prochainement afin d’échanger sur votre projet et de convenir, si possible, d’un rendez-vous.",
  "",
  "À bientôt,",
  "",
  "Arnaud Crestey",
  "La Normandine",
  "",
  "Viessoix — Valdallière, Normandie",
].join("\n"),
        html: `
          <!doctype html>
          <html lang="fr">
            <body style="margin:0; padding:0; background:#f4f0e8;">
              <div style="padding:32px 16px;">
                <div style="
                  max-width:620px;
                  margin:0 auto;
                  overflow:hidden;
                  background:#fffdf8;
                  border:1px solid #d8cdbd;
                  font-family:Arial, sans-serif;
                  color:#20231f;
                  line-height:1.7;
                ">
                  <div style="
                    padding:38px 40px;
                    color:#fffdf8;
                    background:#24372d;
                  ">
                    <p style="
                      margin:0 0 18px;
                      color:rgba(255,253,248,0.66);
                      font-size:11px;
                      font-weight:700;
                      letter-spacing:2.4px;
                      text-transform:uppercase;
                    ">
                      La Normandine
                    </p>

                    <h1 style="
                      margin:0;
                      font-family:Georgia, serif;
                      font-size:38px;
                      font-weight:400;
                      line-height:1.08;
                    ">
                      Votre demande<br />
                      a bien été reçue.
                    </h1>
                  </div>

                  <div style="padding:38px 40px;">
                    <p style="margin-top:0;">
                      Bonjour ${safeFirstName},
                    </p>

                    <p>
                      Nous vous remercions pour votre intérêt pour
                      <strong>La Normandine</strong>.
                    </p>

                    <p>
                      Votre demande de visite nous est bien parvenue.
                      Nous allons en prendre connaissance et reviendrons vers
                      vous prochainement afin d’échanger sur votre projet et
                      de convenir, si possible, d’un rendez-vous.
                    </p>

                    <div style="
                      margin:30px 0;
                      padding:22px;
                      border-left:3px solid #a77a4c;
                      background:#f4f0e8;
                    ">
                      <p style="
                        margin:0;
                        color:#24372d;
                        font-family:Georgia, serif;
                        font-size:21px;
                        line-height:1.4;
                      ">
                        Chaque visite est organisée selon les disponibilités
                        respectives.
                      </p>
                    </div>

                    <p style="margin-bottom:0;">
  À bientôt,<br /><br />
  <strong>Arnaud Crestey</strong><br />
  La Normandine
</p>
                  </div>

                  <div style="
                    padding:20px 40px;
                    border-top:1px solid #d8cdbd;
                    color:#715844;
                    background:#f4f0e8;
                    font-size:12px;
                  ">
                    Viessoix — Valdallière, Normandie
                  </div>
                </div>
              </div>
            </body>
          </html>
        `,
      });
    } catch (confirmationEmailError) {
      console.error(
        "Demande reçue, mais erreur lors de l’envoi de l’accusé de réception :",
        confirmationEmailError,
      );
    }

    return NextResponse.json({
      success: true,
      redirectTo: "/demande-recue",
      message: "Votre demande a bien été transmise.",
    });
  } catch (error) {
    console.error("Erreur d’envoi SMTP Hostinger :", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Le service d’envoi est momentanément indisponible. Votre demande n’a pas été transmise.",
      },
      { status: 502 },
    );
  }
}
