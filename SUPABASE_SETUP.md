# Supabase設定手順

以下の手順でSupabaseの無料プランを利用して予約データをクラウドに保存できます。

1. [Supabase公式サイト](https://supabase.com/)で無料アカウントを作成し、プロジェクトを新規作成します。
2. プロジェクト作成後に表示される`URL`と`service_role`キーをメモしておきます。Edge Functions で利用するため、後ほど環境変数に設定します。
3. ダッシュボードのSQLエディタで以下のスキーマを実行し、`appointments`テーブルを作成します。

```sql
create table if not exists appointments (
  id text primary key,
  name text,
  kana text,
  phone text,
  age text,
  date date,
  time text,
  visitType text,
  symptoms text,
  status text,
  createdAt timestamp
);
```

4. Supabase CLI をインストールし、`supabase/functions` ディレクトリの `appointments` 関数をデプロイします。
   ```bash
   npm install -g supabase
   supabase login
   supabase link --project-ref <your-project-ref>
   supabase functions deploy appointments --no-verify-jwt
   ```
5. デプロイした関数の URL を`index.html`と`admin/index.html`内の`FUNCTION_URL`定数に設定します。サービスロールキーは Edge Functions の環境変数 `SUPABASE_SERVICE_ROLE_KEY` として設定してください。
6. 無料プランの範囲内であれば月額0円で利用できます。医療データを保存する際は、法規制に沿って適切なセキュリティ設定を行ってください。
