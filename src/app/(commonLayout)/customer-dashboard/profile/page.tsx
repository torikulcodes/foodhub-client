import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="global_width">
      <main>
        <div>
          <div>
            <section className="w-full lg:flex flex-1 base-margin hidden">
              <div className="w-fit">
                <aside className="w-64 hidden md:block sticky top-0">
                  <div className="h-[66px] flex flex-col mb-5 mt-3 ">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="flex justify-start items-center gap-3 mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-user-round w-10 h-10 rounded-full bg-pink-200 text-white p-2"
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="8" r="5"></circle>
                            <path d="M20 21a8 8 0 0 0-16 0"></path>
                          </svg>
                          <div className="text-[12px]">
                            <div className="flex items-center gap-2 ">
                              <span className="font-medium">
                                <span className="">Name not set</span>
                              </span>
                              <img
                                src="/assets/voucher/verified.svg"
                                alt=""
                                className="w-[14px] h-[14px]"
                              />
                            </div>
                            <span
                              data-slot="badge"
                              className="items-center justify-center border px-2 py-0.5 md:text-[12px] font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden cursor-pointer border-transparent [a&amp;]:hover:bg-primary/90 flex !border !border-primary bg-transparent text-primary w-fit rounded-full text-[12px]"
                            />
                            <img
                              src="/assets/voucher/coins.svg"
                              alt=""
                              className="w-[12px] h-[12px]"
                            />

                            <span className="text-[10px] md:text-[12px]">
                              0 Point
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <a href="/profile/notifications">
                          <div className="relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-bell text-[#E2136E] fill-none"
                              aria-hidden="true"
                            >
                              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div>
                      <span
                        data-slot="badge"
                        className="inline-flex px-2 py-0.5 text-[8px] md:text-[12px] font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden cursor-pointer [a&amp;]:hover:bg-primary/90 h-[25px] bg-primary text-white rounded-sm w-full justify-center items-center border border-primary"
                      >
                        <img
                          src="/assets/voucher/medal-silver-badge.svg"
                          alt=""
                          className="w-[24px] h-full"
                        />
                        <span className="text-[10px] md:text-[12px]">--</span>
                      </span>
                    </div>
                  </div>

                  <nav className="bg-white rounded-sm space-y-0 py-2 px-4 relative shadow-sm shadow-primary/10">
                    <div
                      className="absolute left-0 w-[2px] bg-primary transition-all duration-300 ease-in-out"
                      style={{ top: "0px", height: "0px" }}
                    ></div>

                    <div
                      className="absolute left-0 bg-primary-lite/30 transition-all duration-300 ease-in-out rounded"
                      style={{
                        top: "0px",
                        height: "0px",
                        width: "calc(100% - 2rem)",
                        marginLeft: "1rem",
                      }}
                    ></div>
                    <div className="px-2 py-1 space-y-3">
                      <a
                        className="w-full flex items-center gap-3  text-[14px] text-left relative z-10 transition-all duration-200 text-primary"
                        data-active="true"
                        href="/profile/orders"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-shopping-cart h-4 w-4"
                          aria-hidden="true"
                        >
                          <circle cx="8" cy="21" r="1"></circle>
                          <circle cx="19" cy="21" r="1"></circle>
                          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                        </svg>
                        <span>My Orders</span>
                      </a>
                      <a
                        className="w-full flex items-center gap-3  text-[14px] text-left relative z-10 transition-all duration-200 "
                        data-active="false"
                        href="/profile/wishlist"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-heart h-4 w-4"
                          aria-hidden="true"
                        >
                          <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                        </svg>
                        <span>My Wishlist</span>
                      </a>
                      <a
                        className="w-full flex items-center gap-3  text-[14px] text-left relative z-10 transition-all duration-200 "
                        data-active="false"
                        href="/profile/vouchers"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-gift h-4 w-4"
                          aria-hidden="true"
                        >
                          <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                          <path d="M12 8v13"></path>
                          <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                          <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
                        </svg>
                        <span>Vouchers</span>
                      </a>
                      <a
                        className="w-full flex items-center gap-3  text-[14px] text-left relative z-10 transition-all duration-200 "
                        data-active="false"
                        href="/profile/addresses"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-map-pin h-4 w-4"
                          aria-hidden="true"
                        >
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>My Addresses</span>
                      </a>
                      <a
                        className="w-full flex items-center gap-3  text-[14px] text-left relative z-10 transition-all duration-200 "
                        data-active="false"
                        href="/profile/account"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-user h-4 w-4"
                          aria-hidden="true"
                        >
                          <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <span>Account Information</span>
                      </a>
                      <a
                        className="w-full flex items-center gap-3  text-[14px] text-left relative z-10 transition-all duration-200 "
                        data-active="false"
                        href="/profile/settings"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-settings h-4 w-4"
                          aria-hidden="true"
                        >
                          <path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                        <span>Settings</span>
                      </a>
                      <a
                        className="w-full flex items-center gap-3  text-[14px] text-left relative z-10 transition-all duration-200 "
                        data-active="false"
                        href="/profile/helpline"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-circle-question-mark h-4 w-4"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        <span>Govaly Helpline</span>
                      </a>
                      <div className="w-full flex justify-start ">
                        <div className=" ">
                          <div className=" flex gap-2 text-[14px] text-primary font-medium cursor-pointer items-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-log-out w-4 text-primary"
                              aria-hidden="true"
                            >
                              <path d="m16 17 5-5-5-5"></path>
                              <path d="M21 12H9"></path>
                              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            </svg>{" "}
                            <span>Log Out</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>
                </aside>
              </div>

              <main className="flex-1 overflow-x-auto">
                <div>
                  <div className=" px-2 md:pl-6 w-full">
                    <div className="hidden md:block h-[66px] md:mb-5 mt-3">
                      <header className="text-[24px] font-semibold mb-1">
                        <div className="flex items-center gap-3 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-shopping-cart h-6 w-6 text-primary"
                            aria-hidden="true"
                          >
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                          </svg>
                          <h1 className="text-2xl font-bold text-gray-900">
                            My Orders
                          </h1>
                        </div>
                      </header>

                      <span className="text-primary text-[16px]">
                        Manage and track your orders easily
                      </span>
                    </div>

                    <main className="w-full ">
                      <div className="min-h-screen">
                        <div
                          dir="ltr"
                          data-orientation="horizontal"
                          data-slot="tabs"
                          className="flex flex-col gap-2 w-full"
                        >
                          <div
                            role="tablist"
                            aria-orientation="horizontal"
                            data-slot="tabs-list"
                            className="text-muted-foreground items-center p-[3px] overflow-auto w-full flex justify-start gap-4 mb-1 bg-white md:bg-transparent rounded-sm h-auto py-0 px-1 scrollbar-hide transition-all duration-300 ease-in-out"
                            data-orientation="horizontal"
                            style={{ outline: "none" }}
                          >
                            <button
                              type="button"
                              role="tab"
                              aria-selected="true"
                              aria-controls="radix-_r_h_-content-all"
                              data-state="active"
                              id="radix-_r_h_-trigger-all"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              All
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_h_-content-pending"
                              data-state="inactive"
                              id="radix-_r_h_-trigger-pending"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Pending
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_h_-content-shipping"
                              data-state="inactive"
                              id="radix-_r_h_-trigger-shipping"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Shipping
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_h_-content-delivered"
                              data-state="inactive"
                              id="radix-_r_h_-trigger-delivered"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Delivered
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_h_-content-to-review"
                              data-state="inactive"
                              id="radix-_r_h_-trigger-to-review"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              To Review
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_h_-content-returned"
                              data-state="inactive"
                              id="radix-_r_h_-trigger-returned"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Returned
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_h_-content-exchanged"
                              data-state="inactive"
                              id="radix-_r_h_-trigger-exchanged"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Exchanged
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_h_-content-refunded"
                              data-state="inactive"
                              id="radix-_r_h_-trigger-refunded"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Refunded
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_h_-content-cancelled"
                              data-state="inactive"
                              id="radix-_r_h_-trigger-cancelled"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Cancelled
                            </button>
                          </div>
                          <div
                            data-state="active"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_h_-trigger-all"
                            id="radix-_r_h_-content-all"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] opacity-100"
                            //   style={{animation-duration: "0s"}}
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_h_-trigger-pending"
                            id="radix-_r_h_-content-pending"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_h_-trigger-shipping"
                            id="radix-_r_h_-content-shipping"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_h_-trigger-delivered"
                            id="radix-_r_h_-content-delivered"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_h_-trigger-to-review"
                            id="radix-_r_h_-content-to-review"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_h_-trigger-returned"
                            id="radix-_r_h_-content-returned"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_h_-trigger-exchanged"
                            id="radix-_r_h_-content-exchanged"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_h_-trigger-refunded"
                            id="radix-_r_h_-content-refunded"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_h_-trigger-cancelled"
                            id="radix-_r_h_-content-cancelled"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                </div>
              </main>
            </section>

            <section className="min-h-screen lg:hidden">
              <section className="block lg:hidden w-full">
                <header className="sticky px-2 pb-2 top-0 backdrop-blur-xl z-10 mb-2 lg:hidden bg-transparent  w-full flex flex-col">
                  <div className="px-4 ">
                    <div className="lg:hidden h-[62px] w-full flex justify-between items-center ">
                      <div className="flex justify-start items-center gap-3 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-user-round w-10 h-10 rounded-full bg-pink-200 text-white p-2"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="8" r="5"></circle>
                          <path d="M20 21a8 8 0 0 0-16 0"></path>
                        </svg>
                        <div className="text-[12px]">
                          <div className="flex items-center gap-2 ">
                            <span className="font-medium">
                              <span className="italic">Name not set</span>
                            </span>

                            <img
                              src="/assets/voucher/verified.svg"
                              alt=""
                              className="w-[10px] h-[10px]"
                            />
                          </div>
                          <span
                            data-slot="badge"
                            className="items-center justify-center border px-2 py-0.5 md:text-[12px] font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden cursor-pointer border-transparent [a&amp;]:hover:bg-primary/90 flex !border !border-primary bg-transparent text-primary w-fit rounded-full text-[12px]"
                          >
                            <img
                              src="/assets/voucher/coins.svg"
                              alt=""
                              className="w-[12px] h-[12px]"
                            />
                            <span className="text-[10px] lg:text-[12px]">
                              0Point
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-start items-center gap-3 w-fit">
                        <div className="flex justify-start items-center gap-3 w-fit">
                          <span
                            data-slot="badge"
                            className="inline-flex items-center justify-center px-2 py-0.5 md:text-[12px] font-medium whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden cursor-pointer [a&amp;]:hover:bg-primary/90 border border-platinum bg-transparent text-platinum w-fit rounded-full text-[12px]"
                          >
                            <img
                              src="/assets/profile/platinum-badge.svg"
                              alt=""
                              className="w-[12px] h-[12px]"
                            />
                            Not set
                          </span>
                        </div>
                        <a href="/profile/notifications">
                          <div className="relative">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-bell text-[#E2136E] fill-none"
                              aria-hidden="true"
                            >
                              <path d="M10.268 21a2 2 0 0 0 3.464 0"></path>
                              <path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="  flex justify-between items-center ">
                    <button
                      data-slot="button"
                      type="button"
                      className="items-center gap-2 shrink-0 whitespace-nowrap text-sm font-medium rounded cursor-pointer outline-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 [&amp;_svg]:shrink-0 hover:scale-105 transition-transform duration-200 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground shadow-none dark:hover:bg-accent/50 size-9 flex w-fit justify-start hover:bg-white/10 h-8"
                    >
                      <img
                        src="/assets/profile/arrow-left.svg"
                        className=""
                        alt="Go back"
                      />
                      <span className="sr-only">Go back</span>
                      <h1 className="text-base font-medium text-left flex-1 ">
                        My Orders
                      </h1>
                    </button>
                    <div className="flex gap-2 items-center">
                      <button
                        data-slot="sheet-trigger"
                        type="button"
                        className="inline-flex items-center justify-center gap-2 shrink-0 whitespace-nowrap text-sm font-medium cursor-pointer outline-none disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([className*='size-'])]:size-4 [&amp;_svg]:shrink-0 hover:scale-105 transition-transform duration-200 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:text-accent-foreground shadow-none dark:hover:bg-accent/50 size-9 hover:bg-white/10 rounded-full h-8 w-8 bg-primary-lite !p-0"
                        aria-haspopup="dialog"
                        aria-expanded="false"
                        aria-controls="radix-_R_59knn9b_"
                        data-state="closed"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          className="lucide lucide-menu h-5 w-5 text-primary"
                          aria-hidden="true"
                        >
                          <path d="M4 12h16"></path>
                          <path d="M4 18h16"></path>
                          <path d="M4 6h16"></path>
                        </svg>
                        <span className="sr-only">Open menu</span>
                      </button>
                    </div>
                  </div>
                </header>

                <main className="base-margin">
                  <div className=" px-2 md:pl-6 w-full">
                    <div className="hidden md:block h-[66px] md:mb-5 mt-3">
                      <header className="text-[24px] font-semibold mb-1">
                        <div className="flex items-center gap-3 ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-shopping-cart h-6 w-6 text-primary"
                            aria-hidden="true"
                          >
                            <circle cx="8" cy="21" r="1"></circle>
                            <circle cx="19" cy="21" r="1"></circle>
                            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                          </svg>

                          <h1 className="text-2xl font-bold text-gray-900">
                            My Orders
                          </h1>
                        </div>
                      </header>
                      <span className="text-primary text-[16px]">
                        Manage and track your orders easily
                      </span>
                    </div>

                    <main className="w-full ">
                      <div className="min-h-screen">
                        <div
                          dir="ltr"
                          data-orientation="horizontal"
                          data-slot="tabs"
                          className="flex flex-col gap-2 w-full"
                        >
                          <div
                            role="tablist"
                            aria-orientation="horizontal"
                            data-slot="tabs-list"
                            className="text-muted-foreground items-center p-[3px] overflow-auto w-full flex justify-start gap-4 mb-1 bg-white md:bg-transparent rounded-sm h-auto py-0 px-1 scrollbar-hide transition-all duration-300 ease-in-out"
                            data-orientation="horizontal"
                            style={{ outline: "none" }}
                          >
                            <button
                              type="button"
                              role="tab"
                              aria-selected="true"
                              aria-controls="radix-_r_r_-content-all"
                              data-state="active"
                              id="radix-_r_r_-trigger-all"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              All
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_r_-content-pending"
                              data-state="inactive"
                              id="radix-_r_r_-trigger-pending"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Pending
                            </button>

                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_r_-content-shipping"
                              data-state="inactive"
                              id="radix-_r_r_-trigger-shipping"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Shipping
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_r_-content-delivered"
                              data-state="inactive"
                              id="radix-_r_r_-trigger-delivered"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Delivered
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_r_-content-to-review"
                              data-state="inactive"
                              id="radix-_r_r_-trigger-to-review"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              To Review
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_r_-content-returned"
                              data-state="inactive"
                              id="radix-_r_r_-trigger-returned"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Returned
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_r_-content-exchanged"
                              data-state="inactive"
                              id="radix-_r_r_-trigger-exchanged"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Exchanged
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_r_-content-refunded"
                              data-state="inactive"
                              id="radix-_r_r_-trigger-refunded"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Refunded
                            </button>
                            <button
                              type="button"
                              role="tab"
                              aria-selected="false"
                              aria-controls="radix-_r_r_-content-cancelled"
                              data-state="inactive"
                              id="radix-_r_r_-trigger-cancelled"
                              data-slot="tabs-trigger"
                              className="data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[8px] border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none cursor-pointer disabled:opacity-50 data-[state=active]:shadow-sm [&amp;_svg]:pointer-events-none [&amp;_svg]:shrink-0 [&amp;_svg:not([className*='size-'])]:size-4 bottom-line-tab transition-all duration-200 ease-in-out hover:scale-105 pt-0"
                              data-orientation="horizontal"
                              data-radix-collection-item=""
                            >
                              Cancelled
                            </button>
                          </div>

                          <div
                            data-state="active"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_r_-trigger-all"
                            id="radix-_r_r_-content-all"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] opacity-100"
                          >
                            {/* style={{animation-duration: 0ms}} */}

                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_r_-trigger-pending"
                            id="radix-_r_r_-content-pending"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_r_-trigger-shipping"
                            id="radix-_r_r_-content-shipping"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_r_-trigger-delivered"
                            id="radix-_r_r_-content-delivered"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_r_-trigger-to-review"
                            id="radix-_r_r_-content-to-review"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_r_-trigger-returned"
                            id="radix-_r_r_-content-returned"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_r_-trigger-exchanged"
                            id="radix-_r_r_-content-exchanged"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_r_-trigger-refunded"
                            id="radix-_r_r_-content-refunded"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                          <div
                            data-state="inactive"
                            data-orientation="horizontal"
                            role="tabpanel"
                            aria-labelledby="radix-_r_r_-trigger-cancelled"
                            id="radix-_r_r_-content-cancelled"
                            data-slot="tabs-content"
                            className="flex-1 outline-none space-y-4 transition-opacity duration-300 ease-out min-h-[200px] hidden"
                          >
                            <div className="text-center text-gray-500 py-8 font-semibold text-[15px] bg-white rounded-md">
                              No data is available
                            </div>
                          </div>
                        </div>
                      </div>
                    </main>
                  </div>
                </main>
              </section>
            </section>
          </div>
        </div>

        <div className="fixed bottom-15 right-15 z-50 hidden lg:flex items-end gap-4">
          <button className="chat-bubble-container relative">
            <div className="mascot-wrapper">
              <img
                className="size-10 object-contain transition-transform duration-300 group-hover:scale-110"
                src="/assets/home/mascot_face.png"
                alt="Support Mascot"
              />
            </div>
          </button>
        </div>
      </main>
    </div>
  );
}
