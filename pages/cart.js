import React, { useContext } from 'react'
import Layout from '../components/Layout'
import { Store } from '../utils/Store'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'

export default function CartScreen() {
    const router = useRouter()
    const { state, dispatch } = useContext(Store)
    const {
        cart: { cartItems },
    } = state

    const removeItemhandler = (item) => {
        dispatch({ type: 'CART_REMOVE_ITEM', payload: item })
    }

    const updateCartHandler = (item, qty) => {
        const quantity = Number(qty)
        dispatch({ type: 'CART_ADD_ITEM', payload: {...item, quantity } })
    }

    return (
        <Layout title="Shopping Cart">
            <h1 className="mb-4 text-x1">Shopping Cart - 쇼핑카트</h1>
            {
                cartItems.length === 0 ? (
                    <div>
                        Cart is empty. <Link href=''>Go Shopping - 쇼핑하러 가기</Link>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-4 md:gap-5">
                        <div className="overflow-x-auto md:col-span-3">
                            <table className="min-w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th className="p-5 text-left">상품평</th>
                                        <th className="p-5 text-right"> 수량 </th>
                                        <th className="p-5 text-right"> 가격 </th>
                                        <th className="p-5 text-center"> 지우기 </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((item) => (
                                            <tr key={item.slug} className="border-b">
                                                <td>
                                                    <Link href={'/product/${item.slug}'}>
                                                        <a className="flex items-center">
                                                            <image src={item.image} alt={item.name} width={50} height={50}></image>
                                                            &nbsp;&nbsp;
                                                            {item.name}
                                                        </a>
                                                    </Link>
                                                </td>
                                                <td className="p-5 text-right">
                                                    <select value={item.quantity}   >
                                                        {
                                                            [...Array(item.countInStock).keys()].map()
                                                        }
                                                    </select>
                                                </td>
                                                <td className="p-5 text-right"> {item.price} </td>
                                                <td className="p-5 text-center">
                                                    <button>
                                                        <XCircleIcon></XCircleIcon> ;;;;;;;;;;
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>

                        <div className='card p-5'>
                            <ul>
                                <li>
                                    <div className='pb-3 text-x1'>
                                        Subtotal ({cartItems.reduce((a, c) => a + c.quantity, 0)}) : $
                                        {cartItems.reduce((a, c) => a + c.quantity * c.price, 0)}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            }
        </Layout>
    )
}

export default dynamic(() => Promise.resolve(CartScreen), { ssr: false })