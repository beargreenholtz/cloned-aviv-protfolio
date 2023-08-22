import React from 'react';

import Header from '@/layout/Header';
import type { IContact } from '@/interfaces/responses';
import SSvg from '@/ui/SSvg';
import { socialMedia } from '../../../data/social-media';

import classes from './Contact.module.scss';

interface IProps {
	readonly onSocialNavigate: (url: string) => void;
	readonly contactData: IContact | null;
}

const ContactView: React.FC<IProps> = (props: React.PropsWithChildren<IProps>) => {
	return (
		<section className={classes['container']}>
			<Header theme="light" />

			<div className={classes['innerContainer']}>
				<h3 className={classes['innerContainer__title']}>CONTACT</h3>
				<div className={classes['contactContainer']}>
					<div className={classes['leftSide']}>
						<a
							href="https://u4wvavq62qc.typeform.com/to/XieOohpc"
							className={classes['leftSide__textMobile']}
						>
							Leave a message &gt;
						</a>
						<span className={classes['leftSide__title']}>WHERE</span>
						<span className={classes['leftSide__adressText']}>Aviv Shiloh</span>
						<span className={classes['leftSide__adressText']}>
							{props.contactData?.attributes.address}
						</span>
						<span className={classes['leftSide__adressText']}>
							{props.contactData?.attributes.city}
						</span>
						<span className={classes['leftSide__adressText']}>
							{props.contactData?.attributes.country}
						</span>
						<span className={classes['leftSide__adressText']}>
							{props.contactData?.attributes.email}
						</span>
						<div className={classes['mailWeb']}>
							<span className={classes['mailWeb__title']}>LET’S TALK</span>
							<span className={classes['mailWeb__phoneNumber']}>+972 50 4949449</span>

							<a
								className={classes['mailWeb__mail']}
								href={`mailto:${props.contactData?.attributes.email}`}
							>
								{props.contactData?.attributes.email}
							</a>
						</div>
					</div>
					<div className={classes['rightSide']}>
						<span className={classes['rightSide__title']}>SOCIAL</span>
						{socialMedia.map((element, i) => (
							<button
								key={i}
								className={classes['rightSide__socialButton']}
								type="button"
								onClick={() => props.onSocialNavigate(element.url)}
							>
								<SSvg name={element.name} className={classes['rightSide__icon']} />
							</button>
						))}
						<a
							href="https://u4wvavq62qc.typeform.com/to/XieOohpc"
							className={classes['rightSide__textDesktop']}
						>
							Leave a message &gt;
						</a>
					</div>
				</div>
				<div className={classes['mailMobile']}>
					<span className={classes['mailMobile__title']}>LET’S TALK</span>
					<span className={classes['mailMobile__text']}>+972 50 4949449</span>
					<a
						className={classes['mailMobile__text']}
						href={`mailto:${props.contactData?.attributes.email}`}
					>
						{props.contactData?.attributes.email}
					</a>
				</div>
				<span className={classes['mobileSignature']}>©2023 AVIV SHILOH</span>
			</div>
		</section>
	);
};

ContactView.displayName = 'ContactView';
ContactView.defaultProps = {};

export default React.memo(ContactView);
