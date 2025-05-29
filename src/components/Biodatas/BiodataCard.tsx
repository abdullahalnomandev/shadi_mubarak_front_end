"use client";
import React from "react";
import { Row, Col } from "antd";
import { FaBriefcase, FaRuler, FaCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import male from "@/assets/boy.jpg";
import female from "@/assets/girl.jpg";
import { BsEye } from "react-icons/bs";
import { useGetALlBiodatasQuery } from "@/redux/api/biodata";
import Link from "next/link";

const BioDatas = () => {
  // const data = [
  //   {
  //     bioDataNo: "ODM-18549",
  //     age: 32,
  //     height: "5' 6\"",
  //     occupation: "Businessman",
  //     gender: "male",
  //   },
  //   {
  //     bioDataNo: "ODM-3343",
  //     age: 29,
  //     height: "5' 5\"",
  //     occupation: "Doctor",
  //     gender: "female",
  //   },
  //   {
  //     bioDataNo: "ODM-4189",
  //     age: 28,
  //     height: "5' 6\"",
  //     occupation: "Madrasa Teacher",
  //     gender: "female",
  //   },
  //   {
  //     bioDataNo: "ODM-11671",
  //     age: 35,
  //     height: "5' 11\"",
  //     occupation: "Teacher",
  //     gender: "male",
  //   },
  //   {
  //     bioDataNo: "ODM-10135",
  //     age: 34,
  //     height: "5' 5\"",
  //     occupation: "Engineer",
  //     gender: "male",
  //   },
  //   {
  //     bioDataNo: "ODM-18315",
  //     age: 39,
  //     height: "5' 5\"",
  //     occupation: "Madrasa Teacher",
  //     gender: "female",
  //   },
  //   {
  //     bioDataNo: "ODM-14373",
  //     age: 29,
  //     height: "5' 11\"",
  //     occupation: "Businessman",
  //     gender: "male",
  //   },
  //   {
  //     bioDataNo: "ODM-7377",
  //     age: 33,
  //     height: "6'",
  //     occupation: "Engineer",
  //     gender: "female",
  //   },
  //   {
  //     bioDataNo: "ODM-14812",
  //     age: 25,
  //     height: "5' 4\"",
  //     occupation: "Imam",
  //     gender: "female",
  //   },
  // ];

  const { data } = useGetALlBiodatasQuery({});

  return (
    <div className='p-2'>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-semibold'>Biodatas</h1>
        <p className='text-gray-600'>{data?.length} biodatas found</p>
      </div>
      <Row gutter={[4, 12]}>
        {data?.biodatas?.map((biodata) => (
          <Col xs={24} sm={12} md={8} key={biodata?.bioDataNo}>
            <Link href={`/biodata/${biodata.bioDataNo}`}>
              <div className='flex justify-center'>
                <div
                  className='relative cursor-pointer hover:scale-100 transition-transform duration-300'
                  style={{
                    width: "300px",
                    aspectRatio: "1",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    background: `
                    radial-gradient(circle at 60% 65%, ${
                      biodata?.gender === "male" ? "#2563eb" : "#ec4899"
                    } 64%, transparent 65%) top left/50% 50%,
                    radial-gradient(circle at 40% 65%, ${
                      biodata?.gender === "male" ? "#2563eb" : "#ec4899"
                    } 64%, transparent 65%) top right/50% 50%,
                    conic-gradient(from -45deg at 50% 85.5%, ${
                      biodata?.gender === "male" ? "#2563eb" : "#ec4899"
                    } 90deg, transparent 0) bottom/100% 50%`,
                    backgroundRepeat: "no-repeat",
                  }}>
                  <div className='relative z-10 flex flex-col items-center justify-center text-white p-1 pb-8 h-full'>
                    <div className='flex justify-center items-center mb-4'>
                      <div className='w-20 h-20 rounded-full overflow-hidden border-2 border-white/30'>
                        <Image
                          src={biodata?.gender === "male" ? male : female}
                          alt={biodata?.gender || ""}
                          width={80}
                          height={80}
                          className='object-cover w-full h-full'
                        />
                      </div>
                    </div>
                    <div className='flex items-center gap-2 text-sm mb-2'>
                      <FaCalendarAlt className='text-white/80' />
                      <span>
                        Age: <span className='font-bold'>{biodata?.age}</span>
                      </span>
                    </div>
                    <div className='flex items-center gap-2 text-sm mb-2'>
                      <FaRuler className='text-white/80' />
                      <span>
                        Height:{" "}
                        <span className='font-bold'>{biodata?.height}</span>
                      </span>
                    </div>
                    <div className='flex items-center gap-2 text-sm mb-3'>
                      <FaBriefcase className='text-white/80' />
                      <span className='font-bold'>{biodata?.occupation}</span>
                    </div>
                    <div className='flex items-center gap-2 text-sm mb-3'>
                      <BsEye className='text-white/80' />
                      50
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BioDatas;
