import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect  } from "react";
import { LessonsItem, LessonsState, fetchLessons } from '../../redux/slices/lessonSlice';
import ProfileSidebar from '../Profile/ProfileSidebar';
import styles from "./temp.module.css";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from '../../redux/store/store';


function Forms() {
    const lessons = useSelector((state: RootState) => state.lessons.lessons)

  const dispatch = useDispatch<AppDispatch>();
  
  console.log(lessons);
  
  
  useEffect(()=> {
    dispatch(fetchLessons())
  }, [])
  return (
    <div className={styles.votingMain}>
    <ProfileSidebar />
    {
      lessons.map((item: LessonsItem)=> {

            if(item.name === "Формы соединени букв")
              return (
                <div className={styles.s}>
                <div className={styles.lessonsTitle}>{item.title}</div>
                <h4 > { item.description }</h4>
                <div className={styles.TextDescc}>
                <div className={styles.lessonsText}>
                  <table>
                    <thead>
                      <th>название</th>
                      <th>отдельное написание</th>
                      <th>начальная позиция</th>
                      <th>средняя позиция</th>
                      <th>конечная позиция</th>
                    </thead>
                    <tbody>
                      <td>أَلِفٌ Алиф</td>
                      <td>ا</td>
                      <td>ا</td>
                      <td>ـا</td>
                      <td>ـا</td>
                      <tr>
                        <td>بَاءٌ Ба:'</td>
                        <td>ب</td>
                        <td>بـ</td>
                        <td>ـبـ</td>
                        <td>ـب</td>
                      </tr>
                      <tr>
                      <td>تَاءٌ Та:’</td>
                      <td>ت</td>
                      <td>تـ</td>
                      <td>	ـتـ</td>
                      <td>	ـت</td>
                      </tr>
                      <tr>
                      <td>	ثَاءٌ Tha:’</td>
                      <td>ث</td>
                      <td>ثـ</td>
                      <td>ـثـ</td>
                      <td>	ـث</td>
                      </tr>
                      <tr>
                      <td>	جِيمٌ Джи:м</td>
                      <td>	ج</td>
                      <td>جـ</td>
                      <td>	ـجـ</td>
                      <td>	ـج</td>
                      </tr><tr>
                      <td>	حَاءٌХа:'</td>
                      <td>ح</td>
                      <td>	حـ</td>
                      <td>ـحـ</td>
                      <td>	ـح</td>
                      </tr><tr>
                      <td>خَاءٌХo:'</td>
                      <td>	خ</td>
                      <td>	خـ</td>
                      <td>	ـخـ</td>
                      <td>	ـخ</td>
                      </tr><tr>
                      <td>خ	دَالٌ Дэ:ль</td>
                      <td>		د</td>
                      <td>	د</td>
                      <td>	ـد</td>
                      <td>	ـد</td>
                      </tr><tr>
                      <td>ذَالٌ Thэ:ль	</td>
                      <td>	ذ</td>
                      <td>	ذ</td>
                      <td>	ـذ</td>
                      <td>	ـذ</td>
                      </tr><tr>
                      <td>رَاءٌ Ро:’</td>
                      <td>	ر</td>
                      <td>	ر</td>
                      <td>	ـر</td>
                      <td>	ـر</td>
                      </tr><tr>
                      <td>زََايٌّ Зэ:йй</td>
                      <td>	ز	</td>
                      <td>	ز	 </td>
                      <td>	ـز</td>
                      <td>	ـز</td>
                      </tr><tr>
                      <td>سِينٌ Си:н</td>
                      <td>	س</td>
                      <td>	سـ</td>
                      <td>	ـسـ</td>
                      <td>	ـس</td>
                      </tr><tr>
                      <td>شِينٌ Ши:н	</td>
                      <td>	ش	</td>
                      <td>	شـ</td>
                      <td>	ـشـ</td>
                      <td>	ـش</td>
                      </tr><tr>
                      <td>صَادٌ Со:д</td>
                      <td>	ص</td>
                      <td>	صـ</td>
                      <td>	ـصـ</td>
                      <td>	ـص</td>
                      </tr><tr>
                      <td>ضَادٌ До:д</td>
                      <td>	ض	</td>
                      <td>	ضـ	</td>
                      <td>	ـضـ</td>
                      <td>	ـض</td>
                      </tr><tr>
                      <td>طَاءٌ То:'	</td>
                      <td>	ط </td>
                      <td>	ط</td>
                      <td>	ـطـ</td>
                      <td>	ـط</td>
                      </tr><tr>
                      <td>ظَاءٌ Зо:'</td>
                      <td>	ظ</td>
                      <td>	ظ</td>
                      <td>	ـظـ</td>
                      <td>	ـظ</td>
                      </tr><tr>
                      <td> عَيْنٌЪайн</td>
                      <td> ع</td>
                      <td> عـ</td>
                      <td> ـعـ</td>
                      <td> ـع </td>
                      </tr><tr>
                      <td> غَيْنٌГЪайн</td>
                      <td>غ </td>
                      <td> غـ</td>
                      <td> ـغـ</td>
                      <td> ـغ</td>
                      </tr><tr>
                      <td> فَاءٌ Фа:’</td>
                      <td> ف	</td>
                      <td> فـ</td>
                      <td> ـفـ</td>
                      <td> ـف</td>
                      </tr><tr>
                      <td> قَافٌ Ко:ф</td>
                      <td> ق</td>
                      <td> قـ</td>
                      <td> ـقـ</td>
                      <td> ـق </td>
                      </tr><tr>
                      <td> كَافٌ Кя:ф</td>
                      <td> ك</td>
                      <td> كـ</td>
                      <td> ـكـ</td>
                      <td> ـك</td>
                      </tr><tr>
                      <td> لَامٌ Ля:м</td>
                      <td>ل	 </td>
                      <td> لـ</td>
                      <td>ـلـ </td>
                      <td> ـل</td>
                      </tr><tr>
                      <td> مِيمٌ Ми:м</td>
                      <td> م</td>
                      <td> مـ</td>
                      <td> ـمـ</td>
                      <td> ـم</td>
                      </tr><tr>
                      <td> نُونٌ Ну:н</td>
                      <td> ن	</td>
                      <td> نـ</td>
                      <td> ـنـ</td>
                      <td> ـن</td>
                      </tr><tr>
                      <td> وَاوٌ Wа:w</td>
                      <td> و	</td>
                      <td>و	 </td>
                      <td>ـو </td>
                      <td>ـو	 </td>
                      </tr><tr>
                      <td> يَاءٌ Йа:’</td>
                      <td> ي</td>
                      <td>يـ </td>
                      <td>ـيـ </td>
                      <td>ـي	 </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                </div>
                <div className={styles.prevNext}>
      <button className={styles.left_btn} ><Link to={"/lessons/voting"}>Предыдущий урок</Link></button>
      <button className={styles.right_btn}><Link to={"/lessons/madda"}>Следующий урок</Link></button> 
    </div>
                </div>
                  )
          }
      )
    }
  </div>
  )
}

export default Forms