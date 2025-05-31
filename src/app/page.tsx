import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back to Home Link */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <Link href="/" className="text-blue-600 hover:text-blue-800 flex items-center">
            <span className="mr-2">←</span> 返回主页
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            临沂智程职通劳务有限公司
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            提供证书报名、零工市场信息、外出劳务信息等服务的综合性平台
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">我们的服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 证书报名服务 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">证书报名服务</h3>
              <p className="text-gray-600 mb-4">
                提供各类职业资格证书、特种作业操作证等证书的报名和考试服务
              </p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>特种作业操作证</li>
                <li>职业资格证书</li>
                <li>安全生产许可证</li>
              </ul>
            </div>

            {/* 零工市场 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">零工市场信息</h3>
              <p className="text-gray-600 mb-4">
                提供最新的临时工作机会和零工市场信息
              </p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>日结工作</li>
                <li>临时用工</li>
                <li>短期项目</li>
              </ul>
            </div>

            {/* 外出劳务 */}
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold mb-4">外出劳务信息</h3>
              <p className="text-gray-600 mb-4">
                提供全国各地优质劳务输出机会
              </p>
              <ul className="text-gray-600 list-disc list-inside">
                <li>长期稳定工作</li>
                <li>优质企业合作</li>
                <li>完善的保障体系</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">联系我们</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-600 mb-4">
              如果您需要任何帮助或咨询，请随时联系我们
            </p>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-semibold">地址：</span> 临沂市兰山区
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">电话：</span> 0539-1234567
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">邮箱：</span> contact@zhicheng-labor.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 