import React from 'react';
import SomeList from 'components/someList';

const News: React.FC = (): React.ReactElement => {
  const listNews = [
    // eslint-disable-next-line max-len
    { id: 1, commentsNumber: 0, isNew: true, text: 'Google’s Termination of Dr. Mitchell, Clubhouse Security, Low-Code Tools, & more on DevNews! ' },
    // eslint-disable-next-line max-len
    { id: 2, commentsNumber: 1, text: 'Total Cookie Protection in Firefox 86, CSS container queries, and Safari Technology Preview 121 | Front End News #019' },
  ];

  return (
    <>
      <SomeList
        list={listNews}
        listName="news"
        pageName="posts"
      />
    </>
  );
};

export default News;
