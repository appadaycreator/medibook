# Supabase設定手順

以下の手順でSupabaseの無料プランを利用して予約データをクラウドに保存できます。

1. [Supabase公式サイト](https://supabase.com/)で無料アカウントを作成し、プロジェクトを新規作成します。
2. プロジェクト作成後に表示される`URL`と`anon`キーをメモしておきます。
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

4. `index.html`と`admin/index.html`内の`SUPABASE_URL`および`SUPABASE_ANON_KEY`を、手順2で取得した値に置き換えます。
5. 無料プランの範囲内であれば月額0円で利用できます。医療データを保存する際は、法規制に沿って適切なセキュリティ設定を行ってください。
