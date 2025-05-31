import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">临沂智程职通劳务有限公司</h1>
          <p className="text-xl mb-8">提供证书报名、零工市场信息、外出劳务信息等服务的综合性平台</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">我们的服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">证书报名</h3>
              <p>提供各类职业资格证书报名服务</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">零工市场</h3>
              <p>提供最新的零工市场信息</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-4">人才招聘</h3>
              <p>提供全面的招聘信息服务</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">联系我们</h2>
          <div className="text-center">
            <p className="mb-4">地址：临沂市兰山区金雀山路与陵园路交汇处向东100米路北</p>
            <p className="mb-4">电话：18669539358</p>
          </div>
        </div>
      </section>
    </div>
  );
} 