//Layouts
import { HeaderOnly } from '../components/Layout'

import Home from '../papes/Home'
import Following from '../papes/Following'
import Upload from '../papes/Upload'
import Profile from '../papes/Profile'
import Search from '../papes/Search'

const publicRoutes = [
    {path: '/', component: Home },
    {path: '/following', component: Following },
    {path: '/upload', component: Upload, layout: HeaderOnly },
    {path: '/profile', component: Profile, layout: null },
    {path: '/search', component: Search, layout: null },
]

const privateRoutes = [
]

export { publicRoutes, privateRoutes }