import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://jzhsucsudpkihnvlylqj.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_SArGeVyPr-N0BUK3gHnlKA_ByT1xt6u';
// Replace after production API deployment. Must end with /v1.
const API_URL = 'https://YOUR_WORKIT_API/v1';

const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
});

const form = document.querySelector('#delete-form');
const statusEl = document.querySelector('#form-status');
const button = document.querySelector('#submit-delete');

function status(message, error = false) {
  statusEl.textContent = message;
  statusEl.style.color = error ? '#ff8b9c' : '#b79cff';
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const email = document.querySelector('#email')?.value?.trim();
  const password = document.querySelector('#password')?.value ?? '';
  const confirmation = document.querySelector('#confirmation')?.value?.trim().toUpperCase();
  const reason = document.querySelector('#reason')?.value?.trim();

  if (!email || !password) return status('Enter the email and password for the WORKIT account.', true);
  if (confirmation !== 'DELETE') return status('Type DELETE to confirm the request.', true);
  if (API_URL.includes('YOUR_WORKIT_API')) return status('The external deletion endpoint is not live yet. Use WORKIT → Profile → Settings → Account for now.', true);

  button.disabled = true;
  status('Verifying your WORKIT account…');
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error || !data.session?.access_token) throw new Error('Could not verify those WORKIT credentials.');

    status('Submitting deletion request…');
    const response = await fetch(`${API_URL}/profiles/me/deletion-request`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${data.session.access_token}`,
      },
      body: JSON.stringify({ reason: reason || 'Requested from WORKIT web deletion page' }),
    });
    if (!response.ok) throw new Error('WORKIT could not submit the deletion request.');

    await supabase.auth.signOut();
    form.reset();
    status('Deletion request submitted. Your public WORKIT profile has been deactivated and the deletion process has started.');
  } catch (error) {
    status(error instanceof Error ? error.message : 'Could not submit the deletion request.', true);
  } finally {
    button.disabled = false;
  }
});
