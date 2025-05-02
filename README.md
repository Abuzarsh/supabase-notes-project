# supabase-notes-project
Designed and implemented a minimal Supabase backend “notes” service, showcasing schema design and REST API endpoints via Edge Functions.
- `uuid` as primary key ensures unique, globally scalable IDs.
- `user_id` links notes to the authenticated user.
- `created_at` defaults help track history without extra logic.
- Chose `text` for flexible note content.


#  Supabase Notes Service

## 🚀 Setup
1. Clone this repo.
2. Run `supabase init` and connect to your project.
3. Add your Supabase `project URL` and `anon key` in the `.env` file.
4. Run: `supabase db push` to apply schema.
5. Deploy functions:
   ```bash
   supabase functions deploy post_notes
   supabase functions deploy get_notes


. Create a Note (POST /post_notes)
curl -X POST "https://<your-project-ref>.functions.supabase.co/post_notes" \
  -H "Authorization: Bearer <your-access-token>" \
  -H "Content-Type: application/json" \
  -d '{"content": "This is my first note!"}'

Expected Response:
{
  "data": { "id": 1, "user_id": "...", "content": "This is my first note!", "created_at": "2025-04-29T10:00:00Z" },
  "error": null
}

 Get All Notes (GET /get_notes)
 curl -X GET "https://<your-project-ref>.functions.supabase.co/get_notes" \
  -H "Authorization: Bearer <your-access-token>" \
  -H "Content-Type: application/json"
Expected Response:

{
  "data": [
    {
      "id": 1,
      "user_id": "...",
      "content": "This is my first note!",
      "created_at": "2025-04-29T10:00:00Z"
    }
  ],
  "error": null
}







