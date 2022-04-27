import React, { Component } from 'react';
import Link from 'next/link';
import QuickView from '../Modal/QuickView';
import AddToCompare from '../Shared/AddToCompare';
import AddToCart from '../Shared/AddToCart';

class TrendingProducts extends Component {

    state = {
        modalOpen: false,
        modalData: null
    };

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item_trending");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    compareButton = (id) => {
        let compare_exist = this.props.CompareProducts.filter(item => item.id === id);
        if(compare_exist.length > 0){
            return(
                <Link href="#">
                    <a 
                        data-tip="Already Added" 
                        data-place="left" 
                        onClick={e => {
                                e.preventDefault(); 
                            }
                        }
                        disabled={true}
                        className="disabled"
                    >
                        <i className="fas fa-sync"></i>
                    </a>
                </Link>
            )
        } else {
            return(
                <AddToCompare id={id} />
            )
        }
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    handleModalData = (data) => {
        this.setState({ 
            modalData: data
        });
    }

    render() {
        let { products } = this.props;
        const { modalOpen } = this.state;
        return (
            <section className="all-products-area pb-60">
                <div className="container">
                    <div className="tab products-category-tab-style-2">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="title">
                                    <h2><span className="dot"></span> Trending Products</h2>
                                </div>

                                <ul className="tabs">
                                    <li
                                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab4')}}
                                        className="current"
                                    >
                                        <span>
                                            All
                                        </span>
                                    </li>
                                    
                                    <li
                                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab5')}}
                                    >
                                        <span>
                                            Men
                                        </span>
                                    </li>
                                    
                                    <li
                                        onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab6')}}
                                    >
                                        <span>
                                            Women
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="tab_content">
                                    <div id="tab4" className="tabs_item_trending">
                                        <div className="row">
                                            {products.slice(0,6).map((data, idx) => (
                                                <div className="col-lg-4 col-sm-6 col-6" key={idx}>
                                                    <div className="single-product-box">
                                                        <div className="product-image">
                                                            <Link href="/product/[id]" as={`/product/${data.id}`}>
                                                                <a>
                                                                    <img src={data.image} alt="image" />
                                                                </a>
                                                            </Link>

                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a 
                                                                            data-tip="Quick View" 
                                                                            data-place="left" 
                                                                            onClick={e => {
                                                                                    e.preventDefault(); 
                                                                                    this.openModal();
                                                                                    this.handleModalData(data)
                                                                                }
                                                                            }
                                                                        >
                                                                            <i className="far fa-eye"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Add to Wishlist" data-place="left">
                                                                            <i className="far fa-heart"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    {
                                                                        this.compareButton(data.id)
                                                                    }
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="product-content">
                                                            <h3>
                                                                <Link href="/product/[id]" as={`/product/${data.id}`}>
                                                                    <a>{data.title}</a>
                                                                </Link>
                                                            </h3>

                                                            <div className="product-price">
                                                                <span className="new-price">${data.price}</span>
                                                            </div>

                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                            </div>
                                                            
                                                            <AddToCart {...data} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div id="tab5" className="tabs_item_trending">
                                        <div className="row">
                                            {products.slice(0,6).map((data, idx) => (
                                                <div className="col-lg-4 col-sm-6 col-6" key={idx}>
                                                    <div className="single-product-box">
                                                        <div className="product-image">
                                                            <Link href="/product/[id]" as={`/product/${data.id}`}>
                                                                <a>
                                                                    <img src={data.image} alt="image" />
                                                                </a>
                                                            </Link>

                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a 
                                                                            data-tip="Quick View" 
                                                                            data-place="left" 
                                                                            onClick={e => {
                                                                                    e.preventDefault(); 
                                                                                    this.openModal();
                                                                                    this.handleModalData(data)
                                                                                }
                                                                            }
                                                                        >
                                                                            <i className="far fa-eye"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Add to Wishlist" data-place="left">
                                                                            <i className="far fa-heart"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    {
                                                                        this.compareButton(data.id)
                                                                    }
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="product-content">
                                                            <h3>
                                                                <Link href="/product/[id]" as={`/product/${data.id}`}>
                                                                    <a>{data.title}</a>
                                                                </Link>
                                                            </h3>

                                                            <div className="product-price">
                                                                <span className="new-price">${data.price}</span>
                                                            </div>

                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                            </div>

                                                            <AddToCart {...data} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div id="tab6" className="tabs_item_trending">
                                        <div className="row">
                                            {products.slice(0,6).map((data, idx) => (
                                                <div className="col-lg-4 col-sm-6 col-6" key={idx}>
                                                    <div className="single-product-box">
                                                        <div className="product-image">
                                                            <Link href="/product/[id]" as={`/product/${data.id}`}>
                                                                <a>
                                                                    <img src={data.image} alt="image" />
                                                                </a>
                                                            </Link>

                                                            <ul>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a 
                                                                            data-tip="Quick View" 
                                                                            data-place="left" 
                                                                            onClick={e => {
                                                                                    e.preventDefault(); 
                                                                                    this.openModal();
                                                                                    this.handleModalData(data)
                                                                                }
                                                                            }
                                                                        >
                                                                            <i className="far fa-eye"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="#">
                                                                        <a data-tip="Add to Wishlist" data-place="left">
                                                                            <i className="far fa-heart"></i>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    {
                                                                        this.compareButton(data.id)
                                                                    }
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div className="product-content">
                                                            <h3>
                                                                <Link href="/product/[id]" as={`/product/${data.id}`}>
                                                                    <a>{data.title}</a>
                                                                </Link>
                                                            </h3>

                                                            <div className="product-price">
                                                                <span className="new-price">${data.price}</span>
                                                            </div>

                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="far fa-star"></i>
                                                            </div>

                                                            <AddToCart {...data} />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                { modalOpen ? <QuickView 
                    closeModal={this.closeModal} 
                    modalData={this.state.modalData}
                /> : '' }
            </section>
        );
    }
}

export default TrendingProducts
