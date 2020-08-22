let songs = [];

const form = document.querySelector('form');
const showList = document.querySelector('.show_list');

const showSong = () => {
    const html = songs.map(song => {
        return `
        <ul>
            <li>${song.picture}</li>
            <li>
                <ul>
                    <li><h2>Title: ${song.title}</h2></li>
                    <li><small>Style: ${song.style}</small></li>
                </ul>
            </li>
            <li>
                <ul>
                    <li><h2>Name: ${song.name}</h2></li>
                    <li><small>Length: ${song.length}</small></li>
                </ul>
            </li>
            <li><h2>SCORE: </h2></li>
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
}
// Calling the function
showSong();

// Creating a new object to store the value from the users
const addSong = (e) => {
    e.preventDefault();
    formitem = e.currentTarget;
    const newSong = {
        title: formitem.title.value,
        name: formitem.name.value,
        style: formitem.style.value,
        length: formitem.length.value,
        picture: formitem.picture.value,
        id: Date.now(),
    };
    // Push the new object into the big array of object
    songs.push(newSong);
    // Running the dispatcheEvent in order to reun this function
    showList.dispatchEvent(new CustomEvent('songListUpdated'));
    showSong();
    // Reset the form
    formitem.reset();
};

// const showList = document.querySelector('.show_list');
const filter = document.querySelector('.filter');

// Handle with the add click button from the form
const handleClick = () => {
    const deleteBtn = e.target.matches("button.delete");
    if (deleteBtn) {
        const id = Number(deleteBtn.value);
        deleteSong(id);
        console.log(id);
    }
};

const deleteSong = idDelete => {
    songs = songs.filter(song => song.id !== idDelete);
    console.log(idDelete);
    showList.dispatchEvent(new CustomEvent('songListUpdated'));
}

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

const updataLocalStorage = (e) => {};

form.addEventListener('submit', addSong);
showList.dispatchEvent(new CustomEvent('songListUpdated', showSong));
showList.dispatchEvent(new CustomEvent('songListUpdated', handleClick));