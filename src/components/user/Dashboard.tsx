"use client";

import { Card, Row, Col, Button } from "antd";
import {
  HeartOutlined,
  ShoppingOutlined,
  TeamOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const UserDashboard = () => {
  const stats = [
    {
      icon: (
        <span className="text-3xl text-emerald-500 font-bold leading-none">
          0
        </span>
      ),
      title: "Connections Available",
      value: null,
      desc: "You need at least one connection to view biodata contact details",
      isConnection: true,
      href: "/packages",
    },
    {
      icon: <HeartOutlined className="text-3xl text-pink-500" />,
      title: "Favorite List",
      value: 1,
      desc: "All your favorited biodatas",
      isClickable: true,
      href: "/user/favorite-list",
    },
    {
      icon: <TeamOutlined className="text-3xl text-purple-500" />,
      title: "Shortlisted",
      value: 0,
      desc: "People who shortlisted your biodata",
    },
    {
      icon: <ShoppingOutlined className="text-3xl text-blue-500" />,
      title: "My Purchases",
      value: 40,
      desc: "Your entire purchase history",
      isClickable: true,
      href: "/purchases",
    },
    {
      icon: <BarChartOutlined className="text-3xl text-yellow-500" />,
      title: "Total Biodata Visits",
      value: null,
      desc: null,
      isBiodata: true,
      visits: {
        "Last 7 Days": 0,
        "Last 30 Days": 0,
        "Last 90 Days": 0,
      },
    },
  ];

  return (
    <div className=" min-h-screen">
      <Row gutter={[16, 16]}>
        {stats.map((stat, i) => (
          <Col xs={24} sm={12} lg={6} key={i}>
            {stat.href ? (
              <Link href={stat.href} className="block">
                <Card
                  className={`text-center hover:shadow-lg  dark:!border-transparent shadow duration-300 !m-h-60 flex flex-col justify-between dark:!text-slate-300 bg-white dark:!bg-slate-800 rounded-lg 
                    ${
                      stat.isClickable || stat.isConnection
                        ? "cursor-pointer hover:scale-[1.02] transition-transform"
                        : ""
                    }`}
                >
                  <CardContent stat={stat} />
                </Card>
              </Link>
            ) : (
              <Card className="text-center !m-h-60 hover:shadow-lg transition duration-300 flex flex-col justify-between bg-white dark:!text-slate-300 shadow dark:!border-transparent dark:!bg-slate-800  rounded-lg">
                <CardContent stat={stat} />
              </Card>
            )}
          </Col>
        ))}
      </Row>
    </div>
  );
};

// Separate component for card content to avoid duplication
const CardContent = ({ stat }: { stat: any }) => (
  <>
    <div>
      <div className="mb-2">{stat.icon}</div>
      <h3 className="text-lg font-medium mb-2">{stat.title}</h3>
      {stat.value !== null && (
        <p className="text-4xl font-bold text-gray-800 mt-1 mb-2">
          {stat.value}
        </p>
      )}
      {stat.desc && <p className="text-sm text-gray-500 mb-3">{stat.desc}</p>}
    </div>

    {stat.isConnection && (
      <Link href="/user/connection/details" className="block mt-2">
        <Button
          type="primary"
          size="middle"
          className="!bg-emerald-500 !rounded-full !hover:bg-emerald-600 border-none"
        >
          Buy Connections
        </Button>
      </Link>
    )}

    {stat.isBiodata && (
      <div className="mt-2">
        <div className="flex justify-between gap-2">
          {Object.entries(stat.visits).map(([label, count]) => (
            <div key={label} className="flex-1 p-2 bg-gray-50 rounded-lg">
              <p className="text-xs text-gray-600 mb-1">{label}</p>
              <p className="text-lg font-semibold text-gray-800">
                {Number(count)}
              </p>
            </div>
          ))}
        </div>
      </div>
    )}

    {stat.isClickable && stat.value !== null && (
      <Link href={stat.href} className="block mt-3">
        <span className="text-blue-500 hover:text-blue-700">
          View {stat.title}
        </span>
      </Link>
    )}
  </>
);

export default UserDashboard;
