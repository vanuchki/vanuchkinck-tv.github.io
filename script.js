function playVideo(videoId) {
    let videoTitle = '';
    let videoSrc = '';

    switch (videoId) {
        case 'video1':
            videoTitle = 'Название видео 1';
            videoSrc = 'https://www.youtube.com/embed/VIDEO_ID_1'; // Замените на реальный ID видео
            break;
        case 'video2':
            videoTitle = 'Название видео 2';
            videoSrc = 'https://www.youtube.com/embed/VIDEO_ID_2'; // Замените на реальный ID видео
            break;
        case 'video3':
            videoTitle = 'Название видео 3';
            videoSrc = 'https://www.youtube.com/embed/VIDEO_ID_3'; // Замените на реальный ID видео
            break;
        default:
            return;
    }

    document.getElementById('video-title').innerText = videoTitle;
    document.getElementById('video-frame').src = videoSrc;
    document.getElementById('video-player').style.display = 'block';
}