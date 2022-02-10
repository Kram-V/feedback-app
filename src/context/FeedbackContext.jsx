import { createContext, useState } from "react";

const FeedBackContext = createContext();

export const FeedBackProvider = ({ children }) => {
  const [feedBackData, setFeedBackData] = useState([
    { id: 1, rating: 10, description: "This is really great!" },
  ]);

  const [feedBackEdit, setFeedBackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedBack = (data) => {
    setFeedBackData([data, ...feedBackData]);
    console.log(data);
  };

  const editFeedBack = (item) => {
    setFeedBackEdit({
      item,
      edit: true,
    });
  };

  const updateFeedBack = (id, updatedFeedBack) => {
    setFeedBackData(
      feedBackData.map((item) =>
        item.id === id ? { ...item, ...updatedFeedBack } : item
      )
    );

    setFeedBackEdit({ item: {}, edit: false });
  };

  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sre you want to delete this feed back?"))
      return setFeedBackData(feedBackData.filter((item) => item.id !== id));
  };

  return (
    <FeedBackContext.Provider
      value={{
        feedBackData,
        feedBackEdit,
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
