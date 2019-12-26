import './Footerbar.sass';

import React, { useState, useEffect } from 'react';
import FooterbarBGLine from '@components//FooterbarBGLine/FooterbarBGLine';
import { ReactComponent as Logo } from '@assets/footerbar/euid-dark-theme.svg';
import { ReactComponent as Illust } from '@assets/footerbar/footer-illust.svg';
import { ReactComponent as DesktopIllust } from '@assets/footerbar/desktop-footer-illust.svg';

/**
 * @function detectOrientation
 * @summary 회전 감지 함수
 */
const detectOrientation = () =>
	window.innerWidth > window.innerHeight ? 'horizontal' : 'vertical';

/**
 * @class Footerbar
 * @summary 푸터바 컴포넌트
 */
const Footerbar = () => {
	const [
		orientation,
		setOrientation,
	] = useState('vertical');

	useEffect(
		() => {
			setOrientation(detectOrientation());
			window.addEventListener(
				'resize',
				() => {
					setOrientation(detectOrientation());
				},
				[
					orientation,
				]
			);
		},
		[
			orientation,
		]
	);
	return (
		<footer className="footerbar">
			<div className="wrapper">
				<h2 className="footerbar__title">
					<Logo aria-label="EUID" />
				</h2>
				<p className="footerbar__slogan">함께 성장하는 &quot;이듬&quot; 교육을 추구합니다.</p>
			</div>
			<div className="wrapper">
				<ul className="footerbar__info">
					<li className="footerbar__info--phone">
						<svg>
							<use xlinkHref="#phone" />
						</svg>
						<a href="tel:010-9814-1461">010.9814.1461</a>
					</li>
					<li className="footerbar__info--email">
						<svg>
							<use xlinkHref="#email" />
						</svg>
						<a href="mailto:yamoo9@naver.com">yamoo9@naver.com</a>
					</li>
					<li className="footerbar__info--youtube">
						<svg>
							<use xlinkHref="#youtube" />
						</svg>
						<a
							href="http://youtube.com/yamoo9"
							target="_blank"
							rel="noopener noreferrer"
						>
							youtube.com/yamoo9
						</a>
					</li>
					<li className="footerbar__info--facebook">
						<svg>
							<use xlinkHref="#facebook" />
						</svg>
						<a
							href="http://facebook.com/yamoo9"
							target="_blank"
							rel="noopener noreferrer"
						>
							facebook.com/yamoo9
						</a>
					</li>
					<li className="footerbar__info--github">
						<svg>
							<use xlinkHref="#github" />
						</svg>
						<a
							href="http://github.com/yamoo9"
							target="_blank"
							rel="noopener noreferrer"
						>
							github.com/yamoo9
						</a>
					</li>
				</ul>
			</div>
			<address className="wrapper">
				<small className="footerbar__copyright">
					ALL RIGHTS RESERVED &copy; <strong>이듬</strong>
				</small>
			</address>
			{orientation === 'vertical' ? (
				<Illust className="footerbar__illust" />
			) : (
				<DesktopIllust className="footerbar__illust type-desktop" />
			)}
			<FooterbarBGLine duration="7000" />
			<svg className="footerbar__svgSprites" hidden>
				<symbol id="email" viewBox="0 0 12 12">
					<path
						fill="#fff"
						d="M10 2H2c-.55 0-.995.45-.995 1L1 9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 2L6 6.5 2 4V3l4 2.5L10 3v1z"
					/>
				</symbol>
				<symbol id="facebook" viewBox="0 0 11 11">
					<path
						fill="#fff"
						d="M11 5.5A5.5 5.5 0 1 0 5.5 11l.097-.001V6.717H4.415V5.34h1.182V4.327c0-1.176.717-1.815 1.766-1.815.502 0 .933.037 1.059.054v1.228h-.723c-.57 0-.68.271-.68.669v.877h1.363l-.178 1.377H7.018v4.07A5.503 5.503 0 0 0 11 5.5z"
					/>
				</symbol>
				<symbol id="github" viewBox="0 0 12 12">
					<path
						fill="#fff"
						d="M10.667 2.847a5.692 5.692 0 0 0-2.08-2.08A5.592 5.592 0 0 0 5.716 0a5.592 5.592 0 0 0-2.87.767 5.691 5.691 0 0 0-2.08 2.08A5.592 5.592 0 0 0 0 5.717c0 1.245.363 2.365 1.09 3.36a5.6 5.6 0 0 0 2.818 2.066c.134.025.233.007.298-.052a.291.291 0 0 0 .096-.223l-.003-.402a66.343 66.343 0 0 1-.004-.663l-.171.03c-.11.02-.247.028-.414.026a3.148 3.148 0 0 1-.517-.052 1.156 1.156 0 0 1-.499-.223.944.944 0 0 1-.327-.458l-.074-.171a1.86 1.86 0 0 0-.235-.38.898.898 0 0 0-.324-.283l-.052-.037a.547.547 0 0 1-.164-.194c-.014-.034-.002-.063.038-.085a.483.483 0 0 1 .216-.034l.148.023c.1.02.222.079.369.178.146.1.267.228.36.387.115.204.253.359.414.466.161.106.324.16.487.16.164 0 .306-.013.425-.038a1.48 1.48 0 0 0 .335-.111c.044-.333.166-.588.364-.767a5.098 5.098 0 0 1-.763-.134 3.038 3.038 0 0 1-.7-.29 1.98 1.98 0 0 1-.598-.5 2.397 2.397 0 0 1-.391-.78 3.716 3.716 0 0 1-.153-1.117c0-.6.196-1.112.588-1.534-.183-.451-.166-.957.052-1.518.144-.045.358-.011.64.1.283.112.49.208.622.287.132.08.237.146.316.2a5.285 5.285 0 0 1 1.43-.193c.49 0 .967.065 1.429.194l.283-.179c.193-.119.422-.228.685-.327.263-.1.464-.127.603-.082.223.56.243 1.067.06 1.518.391.422.587.933.587 1.534 0 .422-.05.795-.152 1.12a2.303 2.303 0 0 1-.395.782 2.08 2.08 0 0 1-.603.495c-.24.134-.474.23-.7.29-.225.06-.48.104-.762.134.257.223.386.576.386 1.057v1.57c0 .09.032.164.094.224s.16.077.294.052a5.598 5.598 0 0 0 2.817-2.066 5.557 5.557 0 0 0 1.09-3.36 5.596 5.596 0 0 0-.766-2.87z"
					/>
				</symbol>
				<symbol id="phone" viewBox="0 0 12 12">
					<path
						fill="#fff"
						d="M10 7.75a5.68 5.68 0 0 1-1.785-.285.51.51 0 0 0-.51.12l-1.1 1.1a7.537 7.537 0 0 1-3.295-3.29l1.1-1.105a.49.49 0 0 0 .125-.505A5.68 5.68 0 0 1 4.25 2c0-.275-.225-.5-.5-.5H2c-.275 0-.5.225-.5.5a8.5 8.5 0 0 0 8.5 8.5c.275 0 .5-.225.5-.5V8.25c0-.275-.225-.5-.5-.5zM6 1.5v5L7.5 5h3V1.5H6z"
					/>
				</symbol>
				<symbol id="youtube" viewBox="0 0 11 8">
					<path
						fill="#fff"
						d="M10.533.729C10.234.198 9.91.1 9.25.063 8.592.02 6.936 0 5.501 0 4.064 0 2.407.019 1.75.063 1.091.1.767.197.465.729.158 1.259 0 2.172 0 3.779v.006c0 1.6.158 2.52.465 3.045.302.53.625.627 1.283.671.659.039 2.316.061 3.753.061 1.435 0 3.091-.022 3.75-.06.66-.045.984-.14 1.282-.672.31-.524.467-1.444.467-3.045V3.78c0-1.608-.157-2.521-.467-3.051zM4.125 5.844V1.719L7.563 3.78 4.124 5.844z"
					/>
				</symbol>
			</svg>
		</footer>
	);
};

export default Footerbar;
