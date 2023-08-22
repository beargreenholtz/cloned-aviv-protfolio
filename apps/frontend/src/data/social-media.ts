import type icons from '@/assets/icons';

interface ISocialMedia {
	readonly name: keyof typeof icons;
	readonly url: string;
}

export const socialMedia: ISocialMedia[] = [
	{ name: 'instagram', url: 'https://www.instagram.com/aviv_shiloh' },
	{ name: 'facebook', url: 'https://www.facebook.com/aviv.shiloh' },
	{ name: 'linkedin', url: 'https://www.linkedin.com/in/aviv-shiloh-67a60974/' },
	{ name: 'youtube', url: 'https://www.youtube.com/@avivshiloh8475' },
];
