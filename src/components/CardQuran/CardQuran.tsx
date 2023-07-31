import React from "react";
import styles from "./card.module.scss";

interface CardQuranProps {
  id: number;
  number: number;
  title: string;
  subTitle: string;
}

const CardQuran: React.FC<CardQuranProps> = ({ id, number, title, subTitle }) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.number}>{number}</div>
        <div className={styles.enName}>{title}</div>
        <div className={styles.name}>{subTitle}</div>
      </div>
    </div>
  );
};

export default CardQuran;
