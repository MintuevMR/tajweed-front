import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahs } from "../../redux/slices/quranSlice";
import ProfileSidebar from "../../components/ProfileSidebar";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "@/redux/store/store";
import CardQuran from "@/components/CardQuran/CardQuran";
import { Surah } from "../../redux/slices/quranSlice";

const Quran: React.FC = () => {
  const surahs: Surah[] = useSelector((state: RootState) => state.quran.surahs);
  const dispath = useDispatch<AppDispatch>();

  useEffect(() => {
    dispath(fetchSurahs());
  }, []);

  return (
    <main>
      <ProfileSidebar />
      <div className="content">
        {surahs.map((sura) => {
          return (
            <Link key={sura.number} to={`/quran/${sura.number}`}>
              <CardQuran
                id={sura.number}
                number={sura.number}
                title={sura.englishName}
                subTitle={sura.name}
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Quran;
