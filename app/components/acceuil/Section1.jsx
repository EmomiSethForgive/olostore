import styles from "../../style/section1.module.css";
import Image from "next/image";
export function Section1() {
  return (
    <div className={styles.section}>
      <div className={styles.section1}>
        <div className={styles.left}>
          <div className={styles.titre}>O'LO STORE</div>{" "}
          <div className={styles.para}>
            Vos articles <br />à porter <br /> de main
          </div>
          <button className={styles.button}>commander</button>
        </div>{" "}
        <div className={styles.right}>
          {" "}
          <Image
            src="/assets/1372-samsung-galaxy-a55-5g-8-256gb-azul-libre-review-removebg-preview 2.svg"
            alt="Search Icon"
            width={350}
            height={350}
            className={styles.Image1}
          />{" "}
        </div>
      </div>
      <div className={styles.promesse}>
        <div className={styles.cnt1}>
          <div className={styles.promesse1}>
            {" "}
            <Image
              src="/assets/livraison.png"
              alt="Search Icon"
              width={42}
              height={42}
              className={styles.Image}
            />{" "}
            <div className={styles.text}>
              Livraison gratuite <br />
              +15 000 XAF
            </div>
          </div>
          <div className={styles.promesse1}>
            {" "}
            <Image
              src="/assets/remboursement.png"
              alt="Search Icon"
              width={42}
              height={42}
              className={styles.Image}
            />{" "}
            <div className={styles.text}>
              100 % rembourser <br />
              10 jours
            </div>
          </div>
        </div>
        <div className={styles.cnt2}>
          <div className={styles.promesse1}>
            {" "}
            <Image
              src="/assets/time.png"
              alt="Search Icon"
              width={42}
              height={42}
              className={styles.Image}
            />{" "}
            <div className={styles.text}>
              Livraison gratuite <br />
              +15 000 XAF
            </div>
          </div>
          <div className={styles.promesse1}>
            {" "}
            <Image
              src="/assets/Container.png"
              alt="Search Icon"
              width={42}
              height={42}
              className={styles.Image}
            />{" "}
            <div className={styles.text}>
              100 % rembourser <br />
              10 jours
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
