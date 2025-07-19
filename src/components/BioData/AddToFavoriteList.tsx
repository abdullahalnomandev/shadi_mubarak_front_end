import {
  useAddFavoriteListMutation,
  useDeleteFavoriteListMutation,
  useGetFavoriteOneByIdQuery,
} from "@/redux/api/favoriteList";
import { message } from "antd";
import { useTranslations } from "next-intl";
import { AiOutlineHeart } from "react-icons/ai";

const AddToFavoriteList = ({ bioDataNo }: { bioDataNo: string }) => {
  const t = useTranslations();

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
        await deleteFavoriteList({ likedPersonBioNo: data.favorite._id });
        message.success("Removed from favorites list");
      } else {
        await addFavoriteList({ likedPersonBioNo: bioDataNo });
        message.success("Added to favorites list");
      }
      refetch();
    } catch (err) {
      message.error(err?.data || "Something went wrong");
    }
  };

  return (
    <button
      className={`flex items-center cursor-pointer gap-1 px-3 py-1.5 rounded-md text-sm transition-all duration-300 font-medium
        ${
          isFavorite
            ? "bg-red-100 text-red-600 hover:bg-red-200"
            : "bg-purple-100 text-purple-700 hover:bg-purple-200"
        }
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      disabled={isAdding || isRemoving}
      onClick={handleToggleFavorite}>
      {isFavorite ? (
        <AiOutlineHeart className='w-4 h-4 text-red-600' />
      ) : (
        <AiOutlineHeart className='w-4 h-4 text-purple-700' />
      )}
      {isFavorite
        ? t("biodata.actions.remove_from_shortList")
        : t("biodata.actions.add_to_shortlist")}
    </button>
  );
};

export default AddToFavoriteList;
