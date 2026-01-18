import { motion } from "framer-motion";

type Testimonial = {
    name: string;
    designation: string;
};

const Contributers = ({
    testimonials,
}: {
    testimonials: Testimonial[];
}) => {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4 lg:-mb-5 text-center bg-transparent lg:mt-10 -mb-10"
            >
                <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400">
                    Our Contributors
                </h1>
                <p className="text-md text-gray-300 max-w-2xl px-8 md:px-0">
                    Grateful to all contributors for their valuable contributions to the development of this website
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-6xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((contributor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white/5 border border-slate-600 rounded-xl p-6 flex flex-col items-center text-center"
                        >
                            <h3 className="text-xl font-bold text-[#dcffb7] mb-1">
                                {contributor.name}
                            </h3>
                            <p className="text-sm text-gray-300">
                                {contributor.designation}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
};

export default Contributers;
