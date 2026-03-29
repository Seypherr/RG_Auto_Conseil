export const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mvzvkdwz';

type FormspreeError = {
  message?: string;
};

type FormspreeResponse = {
  errors?: FormspreeError[];
  error?: string;
};

export async function submitToFormspree(formData: FormData) {
  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  });

  let payload: FormspreeResponse | null = null;

  try {
    payload = (await response.json()) as FormspreeResponse;
  } catch {
    payload = null;
  }

  if (!response.ok) {
    const message =
      payload?.errors?.map((error) => error.message).filter(Boolean).join(' ') ||
      payload?.error ||
      "Une erreur est survenue lors de l'envoi du formulaire.";

    throw new Error(message);
  }

  return payload;
}
