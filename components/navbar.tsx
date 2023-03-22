import styles from "@/styles/Nav.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Testing</title>
      </Head>
      <nav className={styles.nav}>
        <div className={styles.right}>
          <h1>Testing</h1>
        </div>

        <div className={styles.right}>
          {/*hvis det ikke er en session, altså man ikke er logget inn vises logg inn knappen*/}
          {!session && (
            <button
              className={styles.logButton}
              type="button"
              onClick={() => signIn()}
            >
              Logg inn
            </button>
          )}

          {/*hvis det  er en session, altså man er logget inn vises brukernavn og logg ut knapp*/}

          {session && (
            <>
              <p> Logget inn som: {session.user?.name}</p>
              <button
                className={styles.logButton}
                type="button"
                onClick={() => signOut()}
              >
                Logg ut
              </button>
            </>
          )}
        </div>
      </nav>
    </>
  );
}
