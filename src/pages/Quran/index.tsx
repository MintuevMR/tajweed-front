import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurahs } from "../../redux/slices/quranSlice";
import ProfileSidebar from "../../components/ProfileSidebar";
import { Link } from "react-router-dom";
import CardQuran from "@/components/CardQuran/CardQuran";
import "@/App.scss";

const Quran = () => {
  const surahs = useSelector((state) => state.quran.surahs);
  const dispath = useDispatch();

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
