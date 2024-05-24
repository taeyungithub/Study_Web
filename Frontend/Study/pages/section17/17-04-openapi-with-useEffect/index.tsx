import axios from "axios";
import { useEffect, useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [dog, setDog] = useState("");

  useEffect(() => {
    const onClickSync = async (): Promise<void> => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      setDog(result.data.message); // 사진주소
    };
    void onClickSync();
  }, []);

  return (
    <div>
      <img src={dog} />
    </div>
  );
}
