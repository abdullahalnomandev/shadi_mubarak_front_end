"use client";
import {
  useAddFavoriteListMutation,
  useDeleteFavoriteListMutation,
  useGetFavoriteOneByIdQuery,
} from "@/redux/api/favoriteList";
import { isUserLoggedIn } from "@/services/auth.service";
import { message } from "antd";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMinus } from "react-icons/fi";

const AddToFavoriteList = ({ bioDataNo }: { bioDataNo: string }) => {
  const t = useTranslations();
  const isLoggedIn = isUserLoggedIn() as any;
  const router = useRouter();
  const searchParams = usePathname();
  const [addFavoriteList, { isLoading: isAdding }] =
    useAddFavoriteListMutation();
  const [deleteFavoriteList, { isLoading: isRemoving }] =
    useDeleteFavoriteListMutation();
  const { data, refetch } = useGetFavoriteOneByIdQuery({
    likedPersonId: bioDataNo,
  });

  const isFavorite = !!data?.favorite;

  const handleToggleFavorite = async () => {
    try {
      if (isFavorite) {
        await deleteFavoriteList({ likedPersonBioNo: data?.favorite._id });
        message.success("Removed from favorites list");
      } else {
        await addFavoriteList({ likedPersonBioNo: bioDataNo });
        message.success("Added to favorites list");
      }
      refetch();
    } catch (err: any) {
      message.error(err?.data || "Something went wrong");
    }
  };

  return (
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
      onClick={() =>
        isLoggedIn
          ? handleToggleFavorite()
          : router.push(`/login?callbackUrl=${searchParams}`)
      }
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
  );
};

export default AddToFavoriteList;
