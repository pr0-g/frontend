import React from "react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import styles from "./subscriptionWriter.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface WriterItem {
  profileImage: string;
  name: string;
}

interface Props {
  subscriptionItems: WriterItem[];
  title: string;
  viewAllLink: string;
}

function PrevArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div className={`${styles.arrow} ${styles.prevArrow}`} onClick={onClick}>
      {"<"}
    </div>
  );
}

function NextArrow({ onClick }: { onClick?: () => void }) {
  return (
    <div className={`${styles.arrow} ${styles.nextArrow}`} onClick={onClick}>
      {">"}
    </div>
  );
}

export default function SubscriptionWriter({
  subscriptionItems,
  title,
  viewAllLink,
}: Props) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className={styles.subScriptionsContainer}>
      <div className={styles.header}>
        <p className={styles.title}>{title}</p>
        <p className={styles.viewAll}>
          <Link href={viewAllLink}>전체보기 </Link>
        </p>
      </div>
      <div className={styles.itemsWrap}>
        <Slider {...settings}>
          {subscriptionItems.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.profileImageWrapper}>
                <Image
                  src={item.profileImage}
                  alt={`${item.name}'s profile`}
                  width={40}
                  height={40}
                  className={styles.profileImage}
                />
              </div>
              <p className={styles.writerName}>{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
