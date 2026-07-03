"use client";
import {
  useAddFavoriteListMutation,
  useDeleteFavoriteListMutation,
  useGetFavoriteOneByIdQuery,
} from "@/redux/api/favoriteList";
import { isUserLoggedIn } from "@/services/auth.service";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";
import { notification } from "antd";
import Link from "next/link";

const AddToFavoriteList = ({ bioDataNo }: { bioDataNo: string }) => {
  const t = useTranslations();
  const isLoggedIn = isUserLoggedIn() as any;
  const searchParams = usePathname();
  const [addFavoriteList, { isLoading: isAdding }] =
    useAddFavoriteListMutation();
  const [deleteFavoriteList, { isLoading: isRemoving }] =
    useDeleteFavoriteListMutation();
  const [messageApi, contextHolder] = notification.useNotification();
  const { data, refetch } = useGetFavoriteOneByIdQuery(
    {
      likedPersonId: bioDataNo,
    },
    {
      skip: !isLoggedIn,
    },
  );

  const isFavorite = !!data?.favorite;

  const handleToggleFavorite = async () => {
    try {
      if (isFavorite) {
        await deleteFavoriteList({ likedPersonBioNo: data?.favorite._id });
        messageApi.success({
          message: "Removed from favorites list",
          duration: 2,
        });
      } else {
        await addFavoriteList({ likedPersonBioNo: bioDataNo });
        messageApi.success({
          message: "Added to favorites list",
          duration: 2,
        });
      }
      refetch();
    } catch (err: any) {
      messageApi.error({
        message: err?.data || "Something went wrong",
        duration: 2,
      });
    }
  };

  const handleClick = () => {
    if (isLoggedIn) {
      handleToggleFavorite();
    } else {
      // router.push(`/login?callbackUrl=${searchParams}`);
      messageApi.warning({
        message: (
          <span>
            Please{" "}
            <Link
              href={`/login?callbackUrl=${searchParams}`} 
              className="text-rose-600 underline hover:text-rose-800 cursor-pointer"
            >
              Login
            </Link>{" "}
            to add to favorites list
          </span>
        ),
        duration: 2,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <button
        className={`flex items-center gap-2 hover:scale-105 cursor-pointer px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
    ${
      isFavorite
        ? "text-rose-600 bg-rose-50 border border-rose-200 hover:bg-rose-100 focus:ring-2 focus:ring-rose-200"
        : "text-pink-600 bg-white border border-pink-200 hover:bg-pink-50 focus:ring-2 focus:ring-pink-200"
    }
    active:scale-[0.98]
    disabled:opacity-50 disabled:cursor-not-allowed
    min-w-[120px]
    justify-center
  `}
        disabled={isAdding || isRemoving}
        onClick={() => handleClick()}
      >
        {isFavorite ? (
          <FiMinus />
        ) : (
          <AiOutlineHeart
            className={`w-4 h-4 ${
              isFavorite ? "text-rose-500" : "text-pink-500"
            }`}
          />
        )}
        {isFavorite
          ? t("biodata.actions.remove_from_shortList")
          : t("biodata.actions.add_to_shortlist")}
      </button>
    </>
  );
};

export default AddToFavoriteList;
