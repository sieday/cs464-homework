// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';
const section = document.querySelector('section');

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for (const character of data) {
      const card = document.createElement('card');
      const image = document.createElement('img');
      image.src = character.imageUrl;
      image.height = '200';
      image.width = '200';
      card.appendChild(image);
      const listItem = document.createElement('h2');
      listItem.append(character.firstName + ' ' + character.lastName);
      card.appendChild(listItem);
      const subtitle = document.createElement('h3');
      subtitle.append(character.title);
      card.appendChild(subtitle);
      section.appendChild(card);
    }
  })
  .catch(console.error);
