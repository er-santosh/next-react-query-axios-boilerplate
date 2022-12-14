import PostForm from "@/components/features/posts/post-form";
import PostsList from "@/components/features/posts/posts-list";
import styles from "@/styles/home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>POSTS</h1>
        <PostForm />
        <PostsList />
      </main>
    </div>
  );
}
