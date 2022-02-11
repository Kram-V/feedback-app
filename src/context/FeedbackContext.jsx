import { createContext, useState, useEffect } from "react";
import axios from "axios";

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedBackData, setFeedBackData] = useState([]);
  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });

  // TO FETCH DATA WITH SERVER
  useEffect(() => {
    const fetchFeedBackData = async () => {
      const result = await axios.get(
        "https://feed-back-api.herokuapp.com/feedbacks"
      );

      setFeedBackData(result.data);
      setIsLoading(false);
    };

    fetchFeedBackData();
  }, []);

  // WITHOUT JSON SERVER

  // const addFeedBack = (data) => {
  //   setFeedBackData([data, ...feedBackData]);
  //   console.log(data);
  // };

  const addFeedBack = async (data) => {
    const result = await axios.post(
      "https://feed-back-api.herokuapp.com/feedbacks",
      {
        rating: data.rating,
        description: data.description,
      }
    );

    const newData = result.data;

    setFeedBackData([newData, ...feedBackData]);
    console.log(data);
  };

  const editFeedBack = (item) => {
    setFeedBackEdit({
      item,
      edit: true,
    });
  };

  // WITHOUT JSON SERVER

  // const updateFeedBack = (id, updatedFeedBack) => {
  //   setFeedBackData(
  //     feedBackData.map((item) =>
  //       item.id === id ? { ...item, ...updatedFeedBack } : item
  //     )
  //   );

  //   setFeedBackEdit({ item: {}, edit: false });
  // };

  const updateFeedBack = async (id, updatedFeedBack) => {
    const result = await axios.put(
      `https://feed-back-api.herokuapp.com/feedbacks/${id}`,
      {
        rating: updatedFeedBack.rating,
        description: updatedFeedBack.description,
      }
    );

    setFeedBackData(
      feedBackData.map((item) =>
        item.id === id ? { ...item, ...result.data } : item
      )
    );

    setFeedBackEdit({ item: {}, edit: false });
  };

  // WITHOUT SERVER

  // const deleteFeedBack = async (id) => {
  //   if (window.confirm("Are you sre you want to delete this feed back?")) {
  //     return setFeedBackData(feedBackData.filter((item) => item.id !== id));
  //   }
  // };

  const deleteFeedBack = async (id) => {
    if (window.confirm("Are you sre you want to delete this feed back?")) {
      await axios.delete(`https://feed-back-api.herokuapp.com/feedbacks/${id}`);

      return setFeedBackData(feedBackData.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedBackContext.Provider
      value={{
        feedBackData,
        feedBackEdit,
        isLoading,
        addFeedBack,
        editFeedBack,
        updateFeedBack,
        deleteFeedBack,
      }}
    >
      {children}
    </FeedBackContext.Provider>
  );
};

export default FeedBackContext;
