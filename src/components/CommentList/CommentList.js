import React from 'react';
import {
  CommentCard,
  CommentsWrapper,
  InfoTitle,
  InfoValue,
  InfoWrapper,
} from './CommentListStyle';
import Modal from '../Modal/Modal';

const CommentList = () => {
  const eventTitle = 'Kreiraj svoju Pokedex aplikaciju uz ReactJS';
  const comments = [
    {
      nameSurname: 'Ivan Horvat',
      grade: 5,
      comment:
        'Predavanje je bilo odlično, također sam mnogo toga naučio. Veselim se sljedećem sličnom predavanju na FOI-u.',
    },
    {
      nameSurname: 'Ivan Horvat',
      grade: 5,
      comment:
        'Predavanje je bilo odlično, također sam mnogo toga naučio. Veselim se sljedećem sličnom predavanju na FOI-u.',
    },
    {
      nameSurname: 'Ivan Horvat',
      grade: 5,
      comment:
        'Predavanje je bilo odlično, također sam mnogo toga naučio. Veselim se sljedećem sličnom predavanju na FOI-u.',
    },
    {
      nameSurname: 'Ivan Horvat',
      grade: 5,
      comment:
        'Predavanje je bilo odlično, također sam mnogo toga naučio. Veselim se sljedećem sličnom predavanju na FOI-u.',
    },
  ];

  return (
    <>
      <Modal title="Komentari" avgGrade={4.7}>
        <InfoWrapper>
          <InfoTitle>Naziv događaja:</InfoTitle>
          <InfoValue>{eventTitle}</InfoValue>
        </InfoWrapper>
        <InfoTitle>Komentari:</InfoTitle>
        <CommentsWrapper>
          {comments.map((commentInfo, index) => (
            <CommentCard key={index}>
              <InfoWrapper>
                <InfoTitle>Ime i prezime:</InfoTitle>
                <InfoValue>{commentInfo.nameSurname}</InfoValue>
              </InfoWrapper>
              <InfoWrapper>
                <InfoTitle>Ocjena predavanja: </InfoTitle>
                <InfoValue>{commentInfo.grade}</InfoValue>
              </InfoWrapper>
              <InfoWrapper>
                <InfoTitle>Komentar polaznika: </InfoTitle>
                <InfoValue>{commentInfo.comment}</InfoValue>
              </InfoWrapper>
            </CommentCard>
          ))}
        </CommentsWrapper>
      </Modal>
    </>
  );
};

export default CommentList;
