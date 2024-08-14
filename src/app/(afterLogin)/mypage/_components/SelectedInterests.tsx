import React from "react";
import styles from "./selectedInterests.module.css";
import Link from "next/link";

// Interest 인터페이스 정의
interface Interest {
    id: number;
    name: string;
}

// Props 인터페이스 수정
interface Props {
    selectedInterests: Interest[];
}

export default function SelectedInterests({ selectedInterests }: Props) {
    return (
        <div className={styles.selectedInterestsContainer}>
            <div className={styles.header}>
                <div className={styles.title}>
                    <p>관심 분야</p>
                </div>
                <div className={styles.edit}>
                    <p>
                        <Link href="/mypage/edit/interests">수정하기</Link>
                    </p>
                </div>
            </div>
            <div className={styles.itemsWrap}>
                <div className={styles.items}>
                    {selectedInterests.map((item) => (
                        <div key={item.id} className={styles.item}>
                            <p className={styles.writerName}>{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}