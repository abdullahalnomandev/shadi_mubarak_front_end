"use client";

import { useGetDashboardInfoQuery } from "@/redux/api/dashboard";
import {
  BarChartOutlined,
  HeartOutlined,
  ShoppingOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row } from "antd";
import Link from "next/link";
import CreateBiodataCTA from "./CreateBiodataCTA";

const UserDashboard = () => {
  const { data } = useGetDashboardInfoQuery(undefined, {
    refetchOnMountOrArgChange: false,
  });

  const dashboardInfo = data?.dashboard;

  const stats = [
    {
      id: 1,
      icon: (
        <span className='text-4xl text-emerald-500 font-bold leading-none'>
          {dashboardInfo?.totalProfileConnections ?? 0}
        </span>
      ),
      title: "Connections Available",
      value: null,
      desc: "You need at least one connection to view biodata contact details",
      isConnection: true,
      href: "/packages",
    },
    {
      id: 2,
      icon: <HeartOutlined className='text-3xl text-pink-500' />,
      title: "Favorite List",
      value: Number(dashboardInfo?.totalBioDataFavorite ?? 0),
      desc: "All your favorited biodatas",
      isClickable: true,
      href: "/user/favorite-list",
    },
    {
      id: 3,
      icon: <TeamOutlined className='text-3xl text-purple-500' />,
      title: "Your biodata shortlisted",
      value: Number(dashboardInfo?.totalUsersWhoFavoriteYou ?? 0),
      desc: "People who shortlisted your biodata",
      href: "/user/shortlisted-list",
    },
    {
      id: 4,
      icon: <ShoppingOutlined className='text-3xl text-blue-500' />,
      title: "My Purchased",
      value: Number(dashboardInfo?.totalBioDataPurchased ?? 0),
      desc: "Your entire purchase history",
      isClickable: true,
      href: "/purchases",
    },
    {
      id: 5,
      icon: <BarChartOutlined className='text-3xl text-yellow-500' />,
      title: "Total Biodata Visits",
      value: null,
      desc: null,
      isBiodata: true,
      visits: {
        "Last 7 Days": Number(
          dashboardInfo?.profileVisitStats?.visitsLast7Days ?? 0
        ),
        "Last 30 Days": Number(
          dashboardInfo?.profileVisitStats?.visitsLast30Days ?? 0
        ),
        "Last 90 Days": Number(
          dashboardInfo?.profileVisitStats?.visitsLast90Days ?? 0
        ),
      },
    },
  ];

  return (
    <div className='min-h-screen px-4 py-6 bg-gray-50 dark:bg-slate-900'>
      {/* Create Biodata Button */}
      <CreateBiodataCTA />
      {/* Stats Grid */}
      <Row gutter={[16, 16]}>
        {(stats || []).map((stat) => (
          <Col xs={24} sm={12} md={8} key={stat.id}>
            <div className={stat.href ? "block h-full" : "h-full"}>
              <Link href={stat.href || "#"} passHref>
                <Card
                  className={`group h-full transition-all duration-300 rounded-lg shadow-sm hover:shadow-lg flex flex-col justify-between text-center bg-white dark:bg-slate-800 dark:text-slate-300 dark:border-transparent min-h-[220px] ${
                    stat.isClickable || stat.isConnection
                      ? "hover:scale-[1.02]"
                      : ""
                  }`}>
                  <CardContent stat={{ ...stat, isClickable: false }} />
                </Card>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const CardContent = ({ stat }: { stat: any }) => (
  <>
    <div>
      <div className='mb-2'>{stat.icon}</div>
      <h3 className='text-lg font-medium mb-2'>{stat.title}</h3>
      {stat?.value && (
        <p className='text-4xl font-bold text-gray-800 mt-1 mb-2'>
          {stat.value}
        </p>
      )}
      {stat.desc && (
        <p
          className={`mb-3 ${
            !!stat.href && !stat.isConnection
              ? " !text-blue-500"
              : "!text-gray-500"
          } `}>
          {stat.desc}
        </p>
      )}
    </div>

    {stat.isConnection && (
      <div className='block mt-2'>
        <Button
          type='primary'
          size='middle'
          className='!bg-emerald-500 !rounded-md !hover:bg-emerald-600 border-none'>
          Buy Connections
        </Button>
      </div>
    )}

    {stat.isBiodata && (
      <div className='mt-2'>
        <div className='flex justify-between gap-2'>
          {Object.entries(stat.visits).map(([label, count]) => (
            <div key={label} className='flex-1 p-2 bg-gray-50 rounded-lg'>
              <p className='text-xs text-gray-600 mb-1'>{label}</p>
              <p className='text-lg font-semibold text-gray-800'>
                {Number(count)}
              </p>
            </div>
          ))}
        </div>
      </div>
    )}

    {stat.isClickable && stat.value !== null && !stat.href && (
      <span className='text-blue-500 hover:text-blue-700 cursor-pointer'>
        View {stat.title}
      </span>
    )}
  </>
);

export default UserDashboard;
