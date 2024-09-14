import { CreateAlbum } from "../../lib/components/alboms"
import { createMusic } from "../../lib/components/music"
import ApiHandler from "../../lib/http.request"
import { CreateLeftSide, createFotter, createHeader, createPlayer, reload } from "../../lib/ui"

const PUBLIC_URL = new ApiHandler(import.meta.env.VITE_PUBLIC_URL)


const left_side = document.querySelector('.left_side')
const header = document.querySelector('.header')

const artistImg = document.querySelector('.img_artist')
const artistFollowers = document.querySelector('.popularity')
const artistName = document.querySelector('.name_user')
const container_music = document.querySelector('.container_music')
const more = document.querySelector('.more')
const music_albums = document.querySelector('.music_albums')
const foote = document.querySelector('footer')
const player = document.querySelector('.footer-player')
CreateLeftSide(left_side)
createHeader(header)
createFotter(foote)
createPlayer(player)


