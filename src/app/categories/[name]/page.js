'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation';

import Navbar from '@/components/navbar'
import Footer from '@/components/footer'


import Filter from './filter';
import MobileFilter from './mobileFilter';
import Breadcrumb from '@/components/breadcrumb';

import { getProductsByCategory } from '@/services/api';
import ProductsListing from './productsListing';


export default function CategoryListing() {
  const category = useParams()["name"];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  const breadcrumbLinks = [
    { 'href': '', 'name': category }
  ]


  useEffect(() => {
    const fetchProducts = async (category) => {
      try {
        const result = await getProductsByCategory(category);
        setLoading(false);
        if (result.error) {
          setError(result.error);
        } else {
          setProducts(result.data);
        }
      } catch (err) {
        setLoading(false);
        setError("An error occurred while fetching the product.");
      }
    };

    fetchProducts(category);
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products) return <div>Products not found.</div>;

  return (
    <div className="bg-white">
      <Navbar />

      {/* Mobile filter dialog */}
      <MobileFilter mobileFiltersOpen={mobileFiltersOpen} setMobileFiltersOpen={setMobileFiltersOpen} />

      <Breadcrumb links={breadcrumbLinks} />

      <main className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pb-10 pt-20">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Nouveautés</h1>
          <p className="mt-4 text-base text-gray-500">Découvrez nos dernières nouveautés ! </p>
        </div>

        <div className="pb-24 pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          <Filter setMobileFiltersOpen={setMobileFiltersOpen} />
          
          <section aria-labelledby="product-heading" className="mt-6 lg:col-span-2 lg:mt-0 xl:col-span-3">
            <h2 id="product-heading" className="sr-only">
              Products
            </h2>

            <ProductsListing products={products} />
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
