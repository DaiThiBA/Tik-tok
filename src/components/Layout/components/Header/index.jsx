import classNames from 'classnames/bind';

import styles from '../Header/Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return <header className={cx('wrapper')}> 
        <div className={cx('inner')}>
            Logo
        </div>
    </header>;
}

export default Header;