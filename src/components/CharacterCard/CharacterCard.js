import React from 'react';
import PropTypes from 'prop-types';
import ProfileRow from './ProfileRow/ProfileRow';



const UNKNOWN_AVATAR_URL = `${
  process.env.PUBLIC_URL
  }/images/unknown-avatar.png`;

const CharacterCard = ({id, name, image, species, gender }) => {
  return (
    <div className="id-card-wrapper" key={id}>
      <div className="id-card">
        <div className="character-card">
          <ProfileRow name={name} image={image} gender={gender} species={species}/>
        </div>
      </div>
    </div>
  )
}


CharacterCard.propTypes = {
  gender: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
};

CharacterCard.defaultProps = {
  name: 'John Doe',
  image: UNKNOWN_AVATAR_URL,
  gender: 'n/a',
  species: 'human',
};


export default  CharacterCard;
