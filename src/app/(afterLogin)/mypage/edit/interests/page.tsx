import InterestsMain from "@/app/_components/interests/page";

const interests = [
  "Interest 1",
  "Interest 2",
  "Interest 3",
  "Interest 4",
  "Interest 5",
  "Interest 6",
  "Interest 7",
];

export default function Interests() {
  return (
    <>
      <InterestsMain
        interestsList={interests}
        btn="수정하기"
        nextLink="/signup/nickname"
      />
    </>
  );
}
