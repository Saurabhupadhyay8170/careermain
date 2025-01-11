// import AdmissonLayout from "components/main-website/admissions/AdmissonLayout";
// import { useNavigate, useParams } from "react-router-dom";
// import useFetch from 'hooks/useFetch'
// import { useDispatch, useSelector } from "react-redux";
// import { setData } from "src/redux/admissionCategorySlice";
// import { useEffect } from "react";
// import { menuConfig } from "src/utils/constants";
// // import { menuConfig } from "src/utils/constants";

// const Admissions = () => {

//   const { category } = useParams();
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const data = useSelector((state: any) => state.admissionCategory.data);
//   const admlist: ApplicationConfigType[] = useSelector((state: any) => state.navList.admissionList);


//   let url = "";

//   if (category === "admissions" && admlist?.findIndex((item) => item.module_name.includes(menuConfig.admEng)) != -1) {
//     url = "/getApplicationDetailsEng"
//   }

//   else if (category === "management" && admlist?.findIndex((item) => item.module_name.includes(menuConfig.admManag)) != -1) {
//     url = "/getApplicationDetailsManagement"
//   }
//   else if (category === "medical" && admlist?.findIndex((item) => item.module_name.includes(menuConfig.admMed)) != -1) {
//     url = "/getApplicationDetailsMed"
//   }
//   else {
//     navigate("/")
//   }



//   const [fetchData, loading] = useFetch(url, category);
//   useEffect(() => {
//     !loading && dispatch(setData(fetchData));
//   }, [fetchData])
//   return (
//     <>
//      <AdmissonLayout data={data} loading={loading} category={category!} />
//     </>
//   );


// };

// export default Admissions;
import AdmissonLayout from "components/main-website/admissions/AdmissonLayout";
import { useNavigate } from "react-router-dom";
import useFetch from 'hooks/useFetch';
import { useDispatch, useSelector } from "react-redux";
import { setData } from "src/redux/admissionCategorySlice";
import { useEffect } from "react";
import { menuConfig } from "src/utils/constants";

const Admissions = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state: any) => state.admissionCategory.data);
  const admlist: ApplicationConfigType[] = useSelector((state: any) => state.navList.admissionList);

  let url = "";

  if (admlist?.findIndex((item) => item.module_name.includes(menuConfig.admEng)) !== -1) {
    url = "/getApplicationDetailsEng";
  } else if (admlist?.findIndex((item) => item.module_name.includes(menuConfig.admManag)) !== -1) {
    url = "/getApplicationDetailsManagement";
  } else if (admlist?.findIndex((item) => item.module_name.includes(menuConfig.admMed)) !== -1) {
    url = "/getApplicationDetailsMed";
  } else {
    navigate("/");
  }

  const [fetchData, loading] = useFetch(url);
  useEffect(() => {
    if (!loading) {
      dispatch(setData(fetchData));
    }
  }, [fetchData, loading, dispatch]);

  return (
    <>
      <AdmissonLayout data={data} loading={loading} category="" />
    </>
  );
};

export default Admissions;
