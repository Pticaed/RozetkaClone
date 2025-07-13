import "./ProductCard.scss"
import {Link} from "react-router-dom";

export function ProductCard(props) {
  let priceStyle = "";
  if (props.priceStyle !== undefined) {
    priceStyle = props.priceStyle;
  }

  let largeCurrencySymbol = '₴', smallCurrencySymbol = '₴';
  if (props.previousPrice === undefined) {
    smallCurrencySymbol = '';
  }
  if (props.price === undefined) {
    largeCurrencySymbol = '';
  }

  let likeButton, likeButtonViewBox;
  let likeButtonDimensions = {};
  if (props.type === "large-adaptive-product-card") {
    likeButton = <path d="M29.2742 5.5076C28.8087 4.42982 28.1375 3.45316 27.2983 2.63227C26.4583 1.80893 25.4681 1.15464 24.3813 0.704966C23.2543 0.236833 22.0456 -0.0027843 20.8253 2.44086e-05C19.1133 2.44086e-05 17.443 0.468828 15.9914 1.35435C15.6442 1.56618 15.3143 1.79884 15.0017 2.05234C14.6892 1.79884 14.3593 1.56618 14.012 1.35435C12.5605 0.468828 10.8901 2.44086e-05 9.17813 2.44086e-05C7.94535 2.44086e-05 6.75077 0.236163 5.62217 0.704966C4.53177 1.15641 3.54902 1.80579 2.70517 2.63227C1.86479 3.45223 1.19346 4.42913 0.72925 5.5076C0.246556 6.62925 0 7.82036 0 9.0462C0 10.2026 0.236138 11.4076 0.704942 12.6334C1.09735 13.6578 1.65991 14.7205 2.37874 15.7935C3.51776 17.4916 5.08392 19.2626 7.02858 21.058C10.2512 24.034 13.4425 26.0898 13.5779 26.1732L14.401 26.701C14.7656 26.9337 15.2344 26.9337 15.599 26.701L16.422 26.1732C16.5575 26.0863 19.7453 24.034 22.9714 21.058C24.916 19.2626 26.4822 17.4916 27.6212 15.7935C28.3401 14.7205 28.9061 13.6578 29.295 12.6334C29.7638 11.4076 30 10.2026 30 9.0462C30.0034 7.82036 29.7569 6.62925 29.2742 5.5076ZM15.0017 23.9541C15.0017 23.9541 2.63919 16.0331 2.63919 9.0462C2.63919 5.5076 5.56661 2.63921 9.17813 2.63921C11.7166 2.63921 13.9183 4.05604 15.0017 6.12572C16.0852 4.05604 18.2868 2.63921 20.8253 2.63921C24.4368 2.63921 27.3642 5.5076 27.3642 9.0462C27.3642 16.0331 15.0017 23.9541 15.0017 23.9541Z" fill="#74789F"/>;
    likeButtonViewBox = "0 0 30 27";
    likeButtonDimensions.width = "30";
    likeButtonDimensions.height = "27";
  } else {
    likeButton = <path d="M24.3952 4.58966C24.0073 3.69152 23.448 2.87763 22.7486 2.19356C22.0486 1.50744 21.2234 0.962198 20.3177 0.587472C19.3786 0.197361 18.3713 -0.00232025 17.3544 2.03405e-05C15.9277 2.03405e-05 14.5358 0.39069 13.3262 1.12862C13.0368 1.30515 12.7619 1.49903 12.5014 1.71029C12.241 1.49903 11.9661 1.30515 11.6767 1.12862C10.4671 0.39069 9.07511 2.03405e-05 7.64844 2.03405e-05C6.62113 2.03405e-05 5.62564 0.196802 4.68514 0.587472C3.77647 0.963672 2.95751 1.50482 2.25431 2.19356C1.55399 2.87686 0.994552 3.69094 0.607708 4.58966C0.205463 5.52438 0 6.51697 0 7.5385C0 8.50215 0.196782 9.50631 0.587452 10.5278C0.914457 11.3815 1.38326 12.267 1.98229 13.1612C2.93147 14.5763 4.2366 16.0522 5.85715 17.5483C8.54264 20.0283 11.2021 21.7415 11.315 21.811L12.0008 22.2508C12.3047 22.4447 12.6953 22.4447 12.9992 22.2508L13.685 21.811C13.7979 21.7386 16.4544 20.0283 19.1428 17.5483C20.7634 16.0522 22.0685 14.5763 23.0177 13.1612C23.6167 12.267 24.0884 11.3815 24.4125 10.5278C24.8032 9.50631 25 8.50215 25 7.5385C25.0029 6.51697 24.7974 5.52438 24.3952 4.58966ZM12.5014 19.9618C12.5014 19.9618 2.19933 13.3609 2.19933 7.5385C2.19933 4.58966 4.63884 2.19935 7.64844 2.19935C9.76385 2.19935 11.5985 3.38004 12.5014 5.10477C13.4043 3.38004 15.239 2.19935 17.3544 2.19935C20.364 2.19935 22.8035 4.58966 22.8035 7.5385C22.8035 13.3609 12.5014 19.9618 12.5014 19.9618Z" fill="#74789F"/>;
    likeButtonViewBox = "0 0 25 23";
    likeButtonDimensions.width = "25";
    likeButtonDimensions.height = "23";
  }

  let link = props.link;
  if (link === undefined) {
    link = "404";
  }

  // const ref = useRef(null);
  //
  // useEffect(() => {
  //   if (!ref.current) return;
  //
  //   const fittyText = fitty(ref.current, {
  //     minSize: 12,
  //     maxSize: 18,
  //     multiLine: true
  //   });
  //
  //   return () => fittyText.unsubscribe();
  // }, []);

  return (
    <div className={`${props.type} container-fluid product-card default-block position-relative d-flex flex-column`}
         id={props.id}>
      <Link to={link} className="link"/>
      <svg className="like-button position-absolute align-self-end" xmlns="http://www.w3.org/2000/svg" fill="none"
           viewBox={likeButtonViewBox} width={likeButtonDimensions.width} height={likeButtonDimensions.height}>
        {likeButton}
      </svg>
      <div className="image-container align-self-center">
        <img className="img-fluid" src={props.img} alt="productImage"/>
      </div>
      <div className="body d-flex flex-column align-items-start justify-content-between">
        <p className="title">{props.title}</p>
        <span className="d-flex align-content-end">
          <p className="previous-price">{props.previousPrice !== undefined ? props.previousPrice : ''}</p>
          <p className="small-currency-symbol">{smallCurrencySymbol}</p>
        </span>
        <span className="d-flex align-items-end">
          <p className={"price " + priceStyle}>{props.price}</p>
          <p className={"large-currency-symbol " + priceStyle}>{largeCurrencySymbol}</p>
        </span>
        <p className="pending">{props.pending !== undefined ? "Очікується" : ""}</p>
      </div>
    </div>
  );
}