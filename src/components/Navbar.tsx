'use client'

import React from 'react'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  const [isJobInfoOpen, setIsJobInfoOpen] = React.useState(false)
  const [isRecruitmentOpen, setIsRecruitmentOpen] = React.useState(false)
  const [isCertificateOpen, setIsCertificateOpen] = React.useState(false)
  const [isJobsOpen, setIsJobsOpen] = React.useState(false)

  const jobInfoOptions = [
    { title: '青岛港务局', href: '/job-info/qingdao-port' },
    { title: '本地求职', href: '/job-info/local' },
    { title: '国企考编', href: '/job-info/state-owned' },
    { title: '出国劳务', href: '/job-info/overseas' }
  ]

  const recruitmentOptions = [
    { title: '特种作业', href: '/recruitment/special-work' },
    { title: '月嫂陪护', href: '/recruitment/caregiver' },
    { title: '高校毕业生', href: '/recruitment/graduates' },
    { title: '注册安全工程师', href: '/recruitment/safety-engineer' },
    { title: '注册会计师', href: '/recruitment/accountant' },
    { title: '注册消防工程师', href: '/recruitment/fire-engineer' }
  ]

  const certificateOptions = [
    { title: '特种作业证', href: '/certificate/special-operation' },
    { title: '特种设备作业证', href: '/certificate/special-equipment' },
    { title: '安全管理员', href: '/certificate/safety-manager' },
    { title: '职业健康管理员', href: '/certificate/health-manager' },
    { title: '烟花爆竹', href: '/certificate/fireworks' },
    { title: '消防操作员', href: '/certificate/fire-operator' },
    { title: '注册安全工程师', href: '/certificate/safety-engineer' },
    { title: '二级建造师', href: '/certificate/constructor-level2' },
    { title: '一级建造师', href: '/certificate/constructor-level1' },
    { title: '职业技能证书', href: '/certificate/vocational-skills' },
    { title: '其他证书咨询', href: '/certificate/others' }
  ]

  const jobsOptions = [
    { title: '电工', href: '/jobs/electrician' },
    { title: '焊工', href: '/jobs/welder' },
    { title: '登高', href: '/jobs/height-worker' },
    { title: '瓦工', href: '/jobs/bricklayer' },
    { title: '泥工', href: '/jobs/plasterer' },
    { title: '木工', href: '/jobs/carpenter' },
    { title: '制冷工', href: '/jobs/refrigeration' },
    { title: '架子工', href: '/jobs/scaffolder' }
  ]

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              智程职通
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {/* 返回主页链接 */}
            <Link href="/" className="hover:text-gray-300">
              返回主页
            </Link>

            {/* 求职信息下拉菜单 */}
            <div className="relative">
              <button
                className="flex items-center hover:text-gray-300"
                onClick={() => setIsJobInfoOpen(!isJobInfoOpen)}
                onBlur={() => setTimeout(() => setIsJobInfoOpen(false), 200)}
              >
                求职信息
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              
              {isJobInfoOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {jobInfoOptions.map((option) => (
                    <Link
                      key={option.href}
                      href={option.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsJobInfoOpen(false)}
                    >
                      {option.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 人才招聘下拉菜单 */}
            <div className="relative">
              <button
                className="flex items-center hover:text-gray-300"
                onClick={() => setIsRecruitmentOpen(!isRecruitmentOpen)}
                onBlur={() => setTimeout(() => setIsRecruitmentOpen(false), 200)}
              >
                人才招聘
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              
              {isRecruitmentOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {recruitmentOptions.map((option) => (
                    <Link
                      key={option.href}
                      href={option.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsRecruitmentOpen(false)}
                    >
                      {option.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 零工市场下拉菜单 */}
            <div className="relative">
              <button
                className="flex items-center hover:text-gray-300"
                onClick={() => setIsJobsOpen(!isJobsOpen)}
                onBlur={() => setTimeout(() => setIsJobsOpen(false), 200)}
              >
                零工市场
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              
              {isJobsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {jobsOptions.map((option) => (
                    <Link
                      key={option.href}
                      href={option.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsJobsOpen(false)}
                    >
                      {option.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* 证书报名下拉菜单 */}
            <div className="relative">
              <button
                className="flex items-center hover:text-gray-300"
                onClick={() => setIsCertificateOpen(!isCertificateOpen)}
                onBlur={() => setTimeout(() => setIsCertificateOpen(false), 200)}
              >
                证书报名
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              
              {isCertificateOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 max-h-96 overflow-y-auto">
                  {certificateOptions.map((option) => (
                    <Link
                      key={option.href}
                      href={option.href}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setIsCertificateOpen(false)}
                    >
                      {option.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/safety" className="hover:text-gray-300">
              安全服务
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              关于我们
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 