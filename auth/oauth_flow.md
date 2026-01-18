## Fully managed auth

1. User clicks "Continue with Google" (user → frontend)

2. Frontend redirects to Google Auth Server with client ID (frontend → Google Auth Server)

3. Google shows consent screen (Google → user)

4. User approves (user → Google)

5. Google redirects back to frontend with authorization code (Google → frontend via browser redirect)

6. Frontend sends code to your backend (frontend → backend)

7. Backend exchanges code + client secret for tokens (backend → Google)

8. Google returns access token (and refresh token) (Google → backend)

9. Backend uses access token to call Google APIs to fetch user data

* * *

## OAuth with Supabase (Managed Auth Service)

1. User clicks "Continue with Google" (user → frontend)

2. Frontend redirects to Supabase Auth endpoint (frontend → Supabase)

3. Supabase redirects to Google Auth Server with Supabase's client ID (Supabase → Google Auth Server)

4. Google shows consent screen (Google → user)

5. User approves (user → Google)

6. Google redirects back to **Supabase's redirect URI** with authorization code (Google → Supabase Auth Server)

7. Supabase exchanges code + client secret with Google (Supabase → Google Auth Server)
   - The client secret is stored securely in Supabase, never exposed to frontend

8. Google returns access token to Supabase (Google → Supabase)

9. Supabase creates a session and redirects user back to your frontend with Supabase session token (Supabase → frontend)

10. Frontend stores Supabase session token (usually in localStorage/cookie)

11. Frontend uses Supabase session token to authenticate API requests (frontend → Supabase → your data)

**Key differences:**

- No backend needed - Supabase handles the OAuth exchange
- Client secret stays secure - Never exposed to frontend
- You get a Supabase session token - Not the Google access token directly
- Google's redirect URI points to Supabase - Not your application
- This is much simpler and more secure for frontend-only apps!