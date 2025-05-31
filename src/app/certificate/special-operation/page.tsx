'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SpecialOperationCertificate() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    idNumber: '',
    phone: '',
    certificateType: '',
    workYears: '',
    education: '',
    company: '',
    address: '',
  })

  const certificateTypes = [
    '电工作业',
    '焊接与热切割作业',
    '高处作业',
    '制冷与空调作业',
    '压力容器操作',
    '起重机械作业',
    '叉车作业',
    '厂内机动车辆作业',
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里添加表单提交逻辑
    console.log('Form submitted:', formData)
    alert('报名信息已提交，我们会尽快与您联系！')
    router.push('/')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8 flex items-center">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mr-4">
            ← 返回主页
          </Link>
          <h1 className="text-3xl font-bold">特种作业操作证报名</h1>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 姓名 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              {/* 身份证号 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  身份证号 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="idNumber"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.idNumber}
                  onChange={handleChange}
                />
              </div>

              {/* 联系电话 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  联系电话 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* 证书类型 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  证书类型 <span className="text-red-500">*</span>
                </label>
                <select
                  name="certificateType"
                  required
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.certificateType}
                  onChange={handleChange}
                >
                  <option value="">请选择证书类型</option>
                  {certificateTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* 工作年限 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  工作年限
                </label>
                <input
                  type="number"
                  name="workYears"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.workYears}
                  onChange={handleChange}
                />
              </div>

              {/* 学历 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  学历
                </label>
                <input
                  type="text"
                  name="education"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.education}
                  onChange={handleChange}
                />
              </div>

              {/* 工作单位 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  工作单位
                </label>
                <input
                  type="text"
                  name="company"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              {/* 联系地址 */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  联系地址
                </label>
                <input
                  type="text"
                  name="address"
                  className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                提交报名
              </button>
            </div>
          </form>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-bold mb-4">报名须知：</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>请确保填写的个人信息准确无误，特别是姓名、身份证号和联系电话</li>
            <li>提交报名后，我们的工作人员会在1-2个工作日内与您联系</li>
            <li>报名成功后需要准备的材料：身份证复印件、学历证明、工作经历证明等</li>
            <li>如有疑问，请联系我们的客服电话：0539-1234567</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 