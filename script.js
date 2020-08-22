let songs = [];

const form = document.querySelector('form');
console.log(form);
const showList = document.querySelector('.show_list');
console.log(showList);

const showSong = () => {
    const html = songs.map(song => {
        return `
        <ul>
            <li>${song.picture}</li>
            <li>
                <ul>
                    <li><h2>Title: ${song.picture}</h2></li>
                    <li><small>Style: ${song.style}</small></li>
                </ul>
            </li>
            <li>
                <ul>
                    <li><h2>Name: ${song.name}</h2></li>
                    <li><small>Length: ${song.length}</small></li>
                </ul>
            </li>
            <li><h2>SCORE: ${song.score}</h2></li>
            <li><button class="add_score">+1</button></li>
            <li>
                <button value="${song.id}" class="delete" aria-label="delete song ${song.title}">
                    <img src="./assets/img/trash.svg" alt="delete the ${song.id}">
                </button>
            </li>
        </ul>
        `;
    }).join("");
    showList.innerHTML = html;
    console.log(html);
}
showSong();

const addSong = (e) => {
    console.log(e.currentTarget);
    e.preventDefault();
    formitem = e.currentTarget;
    console.log(e);
    const newSong = {
        title: formitem.title.value,
        name: formitem.name.value,
        style: formitem.style.value,
        length: formitem.length.value,
        picture: formitem.picture.value,
        id: Date.now(),
    };
    songs.push(newSong);
    showList.dispatchEvent(new CustomEvent('songListUpdated'));
    showSong();
    formitem.reset();
};
console.log(addSong);


// const showList = document.querySelector('.show_list');
const filter = document.querySelector('.filter');

// Handle with the add click button from the form
const handleClick = () => {};

// Filter the songs by its title
const searchSongFilter = () => {};

// Filter the songs by using its style
const searchSongFilterStyle = () => {};

// Reset the fitler after filter the songs
const resetFilter = () => {};

// Incrementing the score any time this is ckicked
const score = () => {};

// Remove one list of song when this is clicked
const deletebutton = () => {};

const intoLocalStorage = () => {};

const updataLocalStorage = () => {};


form.addEventListener('submit', addSong);
showList.dispatchEvent(new CustomEvent('songListUpdated', showSong));