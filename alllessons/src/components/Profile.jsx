import React from 'react';
import s from './Profile.module.css'

const Profile = () => {
    return(
        
            <div className={s.content}>
                <img src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg" />
                <div>
                    ava + description
                </div>
                <div>
                    My posts
                    <div>New post</div>
                </div>
                <div className={s.posts}>
                    <div className={s.item}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        
    )
}

export default  Profile;