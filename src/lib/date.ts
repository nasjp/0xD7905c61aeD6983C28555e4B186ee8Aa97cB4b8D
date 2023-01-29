export const formatDate = (d: Date): string => {
	const yyyy = d.getFullYear().toString();
	const MM = ('00' + (d.getMonth() + 1).toString()).slice(-2);
	const dd = ('00' + d.getDate().toString()).slice(-2);
	const hh = ('00' + d.getHours().toString()).slice(-2);
	const mm = ('00' + d.getMinutes().toString()).slice(-2);
	const ss = ('00' + d.getSeconds().toString()).slice(-2);

	return `${yyyy}_${MM}_${dd}_${hh}_${mm}_${ss}`;
};
